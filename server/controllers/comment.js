const User = require('../models/User');
const Burger = require('../models/Burger');
const Comment = require('../models/Comment');

function validateComment({ message, rating }) {
    const errors = [];

    if (message.length > 70 || message.length === 0) {
        errors.push('Message must be between 1 and 70 symbols.');
    }

    if (isNaN(rating) || rating < 1 || rating > 5) {
        errors.push('Rating must be between 1 and 5.');
    }

    return errors;
}

module.exports = {
    all: async (req, res, next) => {
        const { burgerId } = req.params;

        try {
            const comments = await Comment.find({ burger: burgerId })
				.populate('creator')
				.sort({ creationDate: -1 });
            res.status(200).json(comments);
        } catch (err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        const userId = req.user.userId;
        const { message, rating } = req.body;
        const { burgerId } = req.params;

        try {
            const validations = validateComment(req.body);
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

            let newComment = await Comment.create({ 
                message, 
                rating, 
                creator: user._id,
                burger: burgerId
            });
            user.comments.push(newComment._id);
            await user.save();

            burger.comments.push(newComment._id);
            await burger.save();
			newComment.creator = user;
            res.status(201).json({ success: true, message: 'Comment created success.', comment: newComment });
        } catch (err) {
            next(err);
        }
    },
    remove: async (req, res, next) => {
        const { id: commentId } = req.params;
        const userId = req.user.userId;

        try {
            const comment = await Comment.findById(commentId);    
            if (!comment) {
                let error = new Error('Comment not found.');
                error.statusCode = 400;
                throw error;
            }

            const currentUser = await User.findById(userId);
            if (comment.creator.toString() !== currentUser.id && currentUser.roles.indexOf('Admin') === -1) {
                let error = new Error('You are not owner on comment.');
                error.statusCode = 401;
                throw error;
            }
            
            const user = await User.findById(comment.creator);
            const userIndex = user.comments.indexOf(commentId);
            user.comments.splice(userIndex, 1);
            await user.save();
            
            const burgerId = comment.burger;
            const burger = await Burger.findById(burgerId);
            const burgerIndex = burger.comments.indexOf(commentId);
            burger.comments.splice(burgerIndex, 1);
            await burger.save();

            await Comment.deleteOne(comment);
            res.status(200).json({ success: true, message: 'Comment removed.' });
        } catch (err) {
            next(err);
        }
    }
};