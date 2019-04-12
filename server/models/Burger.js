const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const burgerSchema = new Schema({
    name: { type: Schema.Types.String, required: [true, 'Name is required.'] },
    price: { type: Schema.Types.Number, required: [true, 'Price is required.'] },
    description: { 
        type: Schema.Types.String, 
        required: [true, 'Description is required.'],
        minlength: 5,
        maxlength: 70
    },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    weight: { type: Schema.Types.Number, required: [true, 'Weight is required.'] },
    calories: { type: Schema.Types.Number, required: [true, 'Calorie is required.'] },
    imageUrl: { type: Schema.Types.String, required: [true, 'ImageUrl is required.'] },
    creationDate: { type: Schema.Types.Date, default: Date.now },
    products: [{ type: Schema.Types.String }]
});

const Burger = mongoose.model('Burger', burgerSchema);
module.exports = Burger;
