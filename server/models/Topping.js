const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toppingSchema = new Schema({
    name: { type: Schema.Types.String, required: [true, 'Name is required.'] },
    creationDate: { type: Schema.Types.Date, default: Date.now },
    imageUrl: { type: Schema.Types.String, required: [true, 'Image is required.'] },
    origin: { type: Schema.Types.String, required: [true, 'Origin is required.'] },
    price: { type: Schema.Types.Number, required: [true, 'Price is required.'] },
    weight: { type: Schema.Types.Number, required: [true, 'Weight is required.'] }
});

const Topping = mongoose.model('Topping', toppingSchema);
module.exports = Topping;
