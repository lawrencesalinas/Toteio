const express = require('express')
const router = express.Router()
const {
  getProducts,
  getProduct,
  createProduct,
  getEditProduct,
  postEditProduct,
} = require('../controller/productController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getProducts).post(protect, createProduct)

router.route('/:id').get(getProduct)

router.route('/edit/:id').get(getEditProduct).put(postEditProduct)

module.exports = router
