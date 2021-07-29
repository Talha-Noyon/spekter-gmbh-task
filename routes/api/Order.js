const route = require('express').Router();
const { getOrders, createOrder } = require('../../controllers/OrderController');

route.get('/', getOrders);

route.post('/', createOrder);


module.exports = route;
