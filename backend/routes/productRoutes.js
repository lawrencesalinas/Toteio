const express = require('express')
const router = express.Router()
const {
  getProducts,
  getProduct,
  createProduct,
  editProduct,
  deleteProduct,
  getAdminProducts,
  getAllShoes,
} = require('../controller/productController')

const { protect } = require('../middleware/authMiddleWare')

router.route('/').get(getProducts).post(protect, createProduct)

router.route('/admin').get(getAdminProducts)

router.route('/shoes').get(getAllShoes)

router
  .route('/:id')
  .get(getProduct)
  .delete(protect, deleteProduct)
  .put(protect, editProduct)

module.exports = router
