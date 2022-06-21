const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Product = require('../models/productModel')

// @desc   Get all Products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  console.log(req.body)
  const products = await Product.findAll()
  res.status(200).json(products)
})

// @desc   Get single Product
// @route  GET /api/products
// @access Public
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByPk(req.params.id)

  if (!product) {
    res.status(404)
    throw new Error('Product not found')
  }
  res.status(200).json(product)
})

// @desc   Create new product
// @route  POST /api/products
// @access Private
const createProduct = asyncHandler(async (req, res) => {
  const { title, price, image, description } = req.body

  if (!title || !price || !image || !description) {
    res.status(400)
    throw new Error('Please enter all fields')
  }

  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  const product = await req.user.createProduct({
    title: title,
    price: price,
    imgUrl: image,
    description: description,
  })
  res.status(201).json(product)
})

// @desc   Get Edit Product
// @route  GET /api/products/edit/:id
// @access Public
const getEditProduct = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }
  const prodId = req.params.id
  const product = await Product.findByPk(prodId)
  console.log(product)
  res.status(200).json(product)
})

// @desc   Edit Product
// @route  POST /api/products/edit/:id
// @access Private
const postEditProduct = asyncHandler(async (req, res) => {
  const { title, price, image, description } = req.body
  const prodId = req.params.id
  const updatedTitle = title
  const updatedPrice = price
  const updatedImgUrl = image
  const updatedDescription = description

  const product = await Product.findByPk(prodId)

  product.title = updatedTitle
  product.price = updatedPrice
  product.imgUrl = updatedImgUrl
  product.description = updatedDescription
  product.save()

  res.status(201).json(product)
})

// const deleteProduct = asyncHandler(async (req, res) => {
//   //   req.user.getProducts({ where: { id: prodId } })
// })
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  getEditProduct,
  postEditProduct,
}
