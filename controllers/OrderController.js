const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const Orderitems = mongoose.model('Orderitems');

/**
  * Finds All Record Of Orders
  * @async
  * @param  no params required
  * @return {Array}   record
  */
exports.getOrders = async (req, res) => {
    try {
        let orders = await Order.find({})
            .populate({
                path: 'orderItems',
                select: 'product quantity',
            })
            .select('phone orderitems');
        orders = orders.map(
            ({
                phone,
                orderItems,
            }) => ({
                phone,
                orderItems,
            })
        );
        return res.status(200).json({ orders });
    } catch (err) {
        console.log(err);
        res.status(401).json({ error: true, message: 'error retrieving orders' });
    }
}

/**
 * Create Orders
 * @async
 * @bodyParam {string} phone The phone of the user who order.
 * @bodyParam {object[]} orderitems
 * @bodyParam {string} orderitems[].product
 */
exports.createOrder = async (req, res) => {
    try {
        const { phone, orderitems } = req.body;
        if (!phone && !orderitems.some(obj => obj.hasOwnProperty("product"))) {
            return res.status(401).json({ error: true, message: 'error creating order' });
        } else {
            let orderItemsIds = [];
            for (let order of orderitems) {
                await Orderitems.create({ id: Date.now().toString(), product: order.product, quantity: order.quantity }).then((saveDoc) => {
                    orderItemsIds.push(saveDoc.id)
                });
            }
            Order.create({ id: Date.now().toString(), orderitems: orderItemsIds, phone }).then(() => {
                return res.status(200).json(req.body);
            });
        }
    } catch (err) {
        console.log(err);
        res.status(401).json({ error: true, message: 'error creating new order' });
    }
}