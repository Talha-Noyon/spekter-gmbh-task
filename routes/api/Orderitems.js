const route = require('express').Router();
const { getOrderItems } = require('../../controllers/OrderItemController');

route.get('/', getOrderItems);

module.exports = route;
