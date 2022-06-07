const express = require('express')
const router = express.Router()
const {
  getProducts,
  getProduct,
  createProduct,
  getEditProduct,
  postEditProduct,
} = require('../controller/productController')

router.route('/').get(getProducts).post(createProduct)

router.route('/:id').get(getProduct)

router.route('/edit/:id').get(getEditProduct).put(postEditProduct)

module.exports = router
