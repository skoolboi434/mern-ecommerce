import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @desc Create new order
// @route POST /api/orders
// @access Private

const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, addOrderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

  // Check to see if cart is empty
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('Cart is empty');
  } else {
    const order = new Order({
      orderItems: orderItems?.map(x => ({
        ...x,
        product: x._id,
        _id: undefined
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      user: req.user._id
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc Get logged in users order
// @route GET /api/orders/myorders
// @access Private

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

// @desc Get order by id
// @route GET /api/orders/:id
// @access Private

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email'); // Id Comes from URL

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc Update order to paid
// @route GET /api/orders/:id/pay
// @access Private / admin

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('Update order to paid');
});

// @desc Update order to delivered
// @route GET /api/orders/:id/deliver
// @access Private /admin

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send('Order delivered');
});

// @desc Get all orders
// @route GET /api/orders
// @access Private / admin

const getOrders = asyncHandler(async (req, res) => {
  res.send('Get all orders');
});

export { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid, updateOrderToDelivered, getOrders };
