const express = require('express')
const router = express.Router()
const {
  getShoppingBag,
  addToShoppingBag,
} = require('../controller/shoppingBagController')

const { protect } = require('../middleware/authMiddleWare')

router.route('/').get(protect, getShoppingBag).post(protect, addToShoppingBag)

module.exports = router
