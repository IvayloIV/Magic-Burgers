const User = require('../models/User');
const Burger = require('../models/Burger');

function validateBurger({ name, price, description, weight, calories, imageUrl }) {
    const errors = [];

    if (name.length === 0) {
        errors.push('Name is empty.');
    }

    if (imageUrl.length === 0) {
        errors.push('ImageUrl is empty.');
    }

    if (isNaN(price) || price <= 0) {
        errors.push('Price must be positive number.');
    }

    if (description.length < 5 || description.length > 70) {
        errors.push('Description length must be between 5 and 70.');
    }

    if (isNaN(weight) || weight <= 0) {
        errors.push('Weight must be positive number.');
    }

    if (isNaN(calories) || calories <= 0) {
        errors.push('Calories must be positive number.');
    }

    return errors;
}

module.exports = {
    top: async (req, res, next) => {
        try {
            const theNewest = await Burger.find({})
                .sort({ creationDate: -1 })
                .limit(3);

            const theMostLiked = await Burger.aggregate(
                [
                    { "$project": {
                        "name": 1,
                        "price": 1,
                        "comments": 1,
                        "weight": 1,
                        "likes": 1,
                        "calories": 1,
                        "imageUrl": 1,
                        "creationDate": 1,
                        "length": { "$size": "$likes" }
                    }},
                    { "$sort": { "length": -1, "creationDate": -1 } },
                    { "$limit": 3 }
                ],
                function(err,results) {
                    return results;
                }
            );

            const theMostCommented = await Burger.aggregate(
                [
                    { "$project": {
                        "name": 1,
                        "price": 1,
                        "comments": 1,
                        "weight": 1,
                        "likes": 1,
                        "calories": 1,
                        "imageUrl": 1,
                        "creationDate": 1,
                        "length": { "$size": "$comments" }
                    }},
                    { "$sort": { "length": -1, "creationDate": -1 } },
                    { "$limit": 3 }
                ],
                function(err,results) {
                    return results;
                }
            );

            res.status(200).json({ theNewest, theMostLiked, theMostCommented });
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

            const validations = validateBurger(body);
            if (validations.length > 0) {
                res.status(424).json({ success: false, errors: validations });
                return;
            }

            const { name, price, description, weight, calories, products, imageUrl } = req.body;
            const newBurger =  await Burger.create({ name, price, description, weight, calories, products, imageUrl });
            res.status(201).json({ success: true, burger: newBurger });
        } catch (err) {
            next(err);
        }
    },
    all: async (req, res, next) => {
        try {
            const burgers = await Burger.find({})
				.sort({ creationDate: -1 });
            res.status(200).json(burgers);
        } catch (err) {
            next(err);
        }
    },
    details: async (req, res, next) => {
        const { id } = req.params;

        try {
            const burger = await Burger.findById(id);
            if (!burger) {
                let error = new Error('Burger not found.');
                error.statusCode = 400;
                throw error;
            }

            res.status(200).json(burger);
        } catch (err) {
            next(err);
        }
    },
    like: async (req, res, next) => {
        const { id: burgerId } = req.params;

        try {
            const userId = req.user.userId;
            const burger = await Burger.findById(burgerId);
            if (!burger) {
                let error = new Error('Burger not found.');
                error.statusCode = 400;
                throw error;
            }

            if (burger.likes.indexOf(userId) !== -1) {
                let error = new Error('You already like this burger.');
                error.statusCode = 400;
                throw error;
            }

            burger.likes.push(userId);
            await burger.save();
            res.status(200).json({ success: true, message: 'Liked successful.' });
        } catch (err) {
            next(err);
        }
    },
    dislike: async (req, res, next) => {
        const { id: burgerId } = req.params;
        
        try {
            const userId = req.user.userId;
            const burger = await Burger.findById(burgerId);
            if (!burger) {
                let error = new Error('Burger not found.');
                error.statusCode = 400;
                throw error;
            }

            const index = burger.likes.indexOf(userId);
            if (index === -1) {
                let error = new Error('First you must to like burger.');
                error.statusCode = 400;
                throw error;
            }

            burger.likes.splice(index);
            await burger.save();
            res.status(200).json({ success: true, message: 'Disliked successful.' });
        } catch (err) {
            next(err);
        }
    }
};
