const User = require('../models/User');
const Topping = require('../models/Topping');

function validateTopping({ name, imageUrl, origin, price, weight }) {
    const errors = [];

    if (name.length === 0) {
        errors.push('Name cannot be empty.');
    }

    if (!imageUrl.startsWith('http') || !imageUrl.startsWith('https')) {
        errors.push('Image must start with http or https');
    }

    if (origin.length === 0) {
        errors.push('Origin cannot be empty.');
    }

    if (isNaN(price) || price <= 0) {
        errors.push('Price must be positive number.');
    }

    if (isNaN(weight) || weight <= 0) {
        errors.push('Weight must be positive number.');
    }

    return errors;
}

module.exports = {
    getAll: async (req, res, next) => {
        try {
            //const user = await User.findById(req.user.userId);
            // if (user.roles.indexOf('Admin') === -1) {
            //     let error = new Error('You are not admin.');
            //     error.statusCode = 401;
            //     throw error;
            // }

            const toppings = await Topping.find({})
				.sort({ creationDate: -1 });
            res.status(200).json(toppings);
        } catch (err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        const body = req.body;

        try {
            const user = await User.findById(req.user.userId);
            if (user.roles.indexOf('Admin') === -1) {
                let error = new Error('You are not admin.');
                error.statusCode = 401;
                throw error;
            }

            const validations = validateTopping(body);
            if (validations.length > 0) {
                res.status(424).json({ success: false, errors: validations });
                return;
            }

            const { name, imageUrl, origin, price, weight } = body;
            const newTopping =  await Topping.create({ name, imageUrl, origin, price, weight });
            res.status(201).json({ success: true, topping: newTopping });
        } catch (err) {
            next(err);
        }
    }
};