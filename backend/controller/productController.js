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
  const {
    title,
    price,
    description,
    image,
    condition,
    gender,
    category,
    brand,
  } = req.body

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
    condition: condition,
    gender: gender,
    category: category,
    brand: brand,
  })
  res.status(201).json(product)
})

// @desc   Edit Product
// @route  PUT /api/products/:id
// @access Private
const editProduct = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

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

// @desc   Delete Product
// @route  DELETE /api/products/:id
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  const product = await Product.findByPk(req.params.id)
  product.destroy()
  res.status(201).json({ message: 'Deleted Successfully' })
})

// @desc   Get admin Products
// @route  GET /api/products/admin
// @access Public
const getAdminProducts = asyncHandler(async (req, res) => {
  const user = await User.findOne({ where: { isAdmin: true } })
  const products = await Product.findAll({ where: { userId: user.id } })
  res.status(201).json(products)
})

// @desc   Get All shoes
// @route  GET /api/products/menshoes
// @access Public
const getAllShoes = asyncHandler(async (req, res) => {
  const user = await User.findOne({ where: { isAdmin: true } })
  const products = await Product.findAll({ where: { category: 'shoes' } })
  res.status(201).json(products)
})

// @desc   Get men shoes
// @route  GET /api/products/menshoes
// @access Public
const getMenShoes = asyncHandler(async (req, res) => {
  const user = await User.findOne({ where: { isAdmin: true } })
  const products = await Product.findAll({ where: { userId: user.id } })
  res.status(201).json(products)
})

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  editProduct,
  deleteProduct,
  getAdminProducts,
  getAllShoes,
}
