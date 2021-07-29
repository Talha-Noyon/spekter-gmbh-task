const mongoose = require('mongoose');
// const Order = mongoose.model('Order');
const Orderitems = mongoose.model('Orderitems');

/**
 * Finds All Record Of Order Items
 * @async
 * @param  no params required
 * @return {Array}   record
 */
exports.getOrderItems = async (req, res) => {
    try {
        let orderitems = await Orderitems.find({});
        return res.status(200).json({ orderitems });
    } catch (err) {
        console.log(err);
        res.status(401).json({ error: true, message: 'error retrieving orderitems' });
    }
}
