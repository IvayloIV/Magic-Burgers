const User = require('../models/User');
const Order = require('../models/Order');
const Topping = require('../models/Topping');
const Burger = require('../models/Burger');

async function validateOrder({ toppings, quantity, totalPrice }) {
    const errors = [];

    for (let toppingId of toppings) {
        const topping = await Topping.findById(toppingId);
        if (!topping) {
            errors.push('Invalid topping.');
            break;
        }
    }

    if (isNaN(quantity) || quantity <= 0) {
        errors.push('Quantity should be positive number.');
    }

    if (isNaN(totalPrice) || totalPrice <= 0) {
        errors.push('Total price should be positive number.');
    } 

    return errors;
}

module.exports = {
    all: async (req, res, next) => {
        try {
            const user = await User.findById(req.user.userId);
            if (user.roles.indexOf('Admin') === -1) {
                let error = new Error('You are not admin.');
                error.statusCode = 401;
                throw error;
            }

            const orders = await Order.find()
                .sort({ creationDate: -1 });
            return res.status(200).json(orders);
        } catch (err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        const { burgerId } = req.params;
        const { toppings, quantity, totalPrice, products, deliveryType } = req.body;
        const { userId } = req.user;

        try {
            const validations = await validateOrder(req.body);
            if (validations.length > 0) {
                res.status(424).json({ success: false, errors: validations });
                return;
            }

            const burger = await Burger.findById(burgerId);
            if (!burger) {
                let error = new Error('Burger not found.');
                error.statusCode = 400;
                throw error;
            }
            const user = await User.findById(userId);
            if (user.blocked) {
                let error = new Error('You are blocked.');
                error.statusCode = 422;
                throw error;
            }

            const newOrder = await Order.create({
                toppings,
                quantity,
                totalPrice,
                products,
                deliveryType,
                creator: user._id,
                burger: burger._id
            });

            user.orders.push(newOrder._id);
            await user.save();
            res.status(201).json({ success: true, message: 'Order created success.' });
        } catch (err) {
            next(err);
        }
    },
    my: async (req, res, next) => {
        const { userId } = req.user;

        try {
            const user = await User.findById(userId)
                .populate({ 
                    path: 'orders',
                    populate: {
                        path: 'toppings',
                        model: 'Topping'
                    } 
                })
                .populate({ 
                    path: 'orders',
                    populate: {
                        path: 'burger',
                        model: 'Burger'
                    },
					options: {
						sort: { creationDate: -1 }
					}
                });
            const orders = user.orders;

            res.status(200).json(orders);
        } catch (err) {
            next(err);
        }
    },
    getByUsername: async (req, res, next) => {
        const { username } = req.params;

        try {
            const user = await User.findOne({username})
                .populate('orders');

            if (!user) {
                let error = new Error('User not found.');
                error.statusCode = 400;
                throw error;
            }

            const currentUser = await User.findById(req.user.userId);
            if (user.username !== req.user.username && currentUser.roles.indexOf('Admin') === -1) {
                let error = new Error('You don`t have permissions.');
                error.statusCode = 401;
                throw error;
            }

            const orders = user.orders;
            res.status(200).json(orders);
        } catch (err) {
            next(err);
        }
    },
    details: async (req, res, next) => {
        const { id } = req.params;

        try {
            const order = await Order.findById(id)
                .populate('toppings')
                .populate('burger');
            if (!order) {
                let error = new Error('Order not found.');
                error.statusCode = 400;
                throw error;
            }

            res.status(200).json(order);
        } catch (err) {
            next(err);
        }
    },
    edit: async (req, res, next) => {
        const { id: orderId } = req.params;
        const { status } = req.body;
        const { userId } = req.user;

        try {
            const user = await User.findById(userId);
            if (user.roles.indexOf('Admin') === -1) {
                let error = new Error('You are not admin.');
                error.statusCode = 401;
                throw error;
            }

            const order = await Order.findById(orderId);
            if (!order) {
                let error = new Error('Order not found.');
                error.statusCode = 400;
                throw error;
            }

            if (order.status === 'Delivered') {
                let error = new Error('Order was delivered.');
                error.statusCode = 422;
                throw error;
            }

            order.status = status;
            await order.save();
            res.status(200).json({ success: true, message: 'Status changed success.' });
        } catch (err) {
            next(err);
        }
    }
};