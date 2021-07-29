const route = require('express').Router();

route.use('/order', require('./api/Order'));
route.use('/orderitems', require('./api/Orderitems'));

module.exports = route;
