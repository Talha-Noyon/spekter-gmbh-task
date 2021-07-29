const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  id: { type: String },
  orderitems: { type: Array },
  phone: { type: String },
  default: { type: Boolean }
}, { timestamps: true });

orderSchema.virtual('orderItems', {
  ref: 'Orderitems',
  localField: 'orderitems',
  foreignField: 'id'
});
orderSchema.set('toObject', { virtuals: true });
orderSchema.set('toJSON', { virtuals: true });

mongoose.model('Order', orderSchema, 'orders');
