const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const Orderitems = mongoose.model('Orderitems');

(async () => {
    try {
        Promise.all([
            Orderitems.create({ id: Date.now().toString(), product: "Mango", quantity: 20, default: true }),
            Orderitems.create({ id: Date.now().toString(), product: "Orange", quantity: 10, default: true }),
            Orderitems.create({ id: Date.now().toString(), product: "Pineapple", quantity: 7, default: true }),
            Orderitems.create({ id: Date.now().toString(), product: "Banana", quantity: 8, default: true }),
        ]).then((doc) => {
            Order.create({ id: Date.now().toString(), orderitems: doc.map(itm => itm.id), phone: "01699324343", default: true })
        });
    }
    catch (err) {
        console.log("error creating/fetching default order", err);
    }
})()