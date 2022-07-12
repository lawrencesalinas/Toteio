const express = require('express')
const router = express.Router()
const {
  getOrders,
  getOrder,
  postOrder,
} = require('../controller/orderController')

const { protect } = require('../middleware/authMiddleWare')

router.route('/').get(protect, getOrders).post(protect, postOrder)

router.route('/:id').get(protect, getOrder)

module.exports = router
