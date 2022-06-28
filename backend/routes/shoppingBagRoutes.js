const express = require('express')
const router = express.Router()
const {
  getShoppingBag,
  addToShoppingBag,
  deleteShoppingBagItem,
} = require('../controller/shoppingBagController')

const { protect } = require('../middleware/authMiddleWare')

router.route('/').get(protect, getShoppingBag).post(protect, addToShoppingBag)

router.route('/:id').delete(protect, deleteShoppingBagItem)

module.exports = router
