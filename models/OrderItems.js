const mongoose = require('mongoose');
const orderItemsSchema = new mongoose.Schema({
    id: { type: String },
    product: { type: String },
    quantity: { type: Number },
    default: { type: Boolean }
}, { timestamps: true });

mongoose.model('Orderitems', orderItemsSchema, 'orderitems');
