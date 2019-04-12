const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    creationDate: { type: Schema.Types.Date, default: Date.now },
    status: { 
        type: Schema.Types.String, 
        enum: ['Pending', 'In Progress', 'In Transit', 'Delivered'],
        default: 'Pending'
    },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    burger: { type: Schema.Types.ObjectId, ref: 'Burger' },
    toppings: [{ type: Schema.Types.ObjectId, ref: 'Topping' }],
    quantity: { type: Schema.Types.Number, required: [true, 'Quantity is required.'] },
    totalPrice: { type: Schema.Types.Number, required: [true, 'Total price is required.'] },
    deliveryType: { 
        type: Schema.Types.String, 
        enum: ['Express', 'Fast', 'Regular'],
        default: 'Regular'
    },
    products: [{ type: Schema.Types.String }]
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
