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
  getMenShoes,
  getWomenShoes,
  getAllClothes,
  getWomenClothes,
  getMenClothes,
} = require('../controller/productController')

const { protect } = require('../middleware/authMiddleWare')

router.route('/').get(getProducts).post(protect, createProduct)

router.route('/admin').get(getAdminProducts)

router.get('/shoes', getAllShoes)

router.get('/menshoes', getMenShoes)

router.get('/womenshoes', getWomenShoes)

router.get('/clothes', getAllClothes)

router.get('/menclothes', getMenClothes)

router.get('/womenclothes', getWomenClothes)

router
  .route('/:id')
  .get(getProduct)
  .delete(protect, deleteProduct)
  .put(protect, editProduct)

module.exports = router
