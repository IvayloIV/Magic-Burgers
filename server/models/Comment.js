const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    message: { type: Schema.Types.String, required: [true, 'Message is required.'], maxlength: 70 },
    rating: { type: Schema.Types.Number, required: [true, 'Rating is required.'], min: 1, max: 5 },
    burger: { type: Schema.Types.ObjectId, ref: 'Burger' },
    creationDate: { type: Schema.Types.Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
