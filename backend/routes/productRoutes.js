const express = require('express')
const router = express.Router()
const {
  getProducts,
  getProduct,
  createProduct,
  editProduct,
  deleteProduct,
  getAdminProducts,
} = require('../controller/productController')

const { protect } = require('../middleware/authMiddleWare')

router.route('/').post(protect, createProduct)

router.route('/admin').get(getAdminProducts)

router
  .route('/:id')
  .get(getProduct)
  .delete(protect, deleteProduct)
  .put(protect, editProduct)

router.get('/category/:categoryName', getProducts)

module.exports = router
