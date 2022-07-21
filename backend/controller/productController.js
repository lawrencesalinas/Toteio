const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Product = require('../models/productModel')

// @desc   Get all Products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const reqGender = req.query.gender
  const user = await User.findOne({
    where: { email: process.env.ADMIN, isAdmin: true },
  })

  // Get men or women clothes/shoes
  if (reqGender) {
    const products = await Product.findAll({
      where: {
        userId: user.id,
        category: req.params.categoryName,
        gender: reqGender,
      },
    })

    res.status(200).json(products)
  } else {
    const products = await Product.findAll({
      where: {
        userId: user.id,
        category: req.params.categoryName,
      },
    })

    res.status(200).json(products)
  }
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
    image1,
    image2,
    image3,
    image4,
    condition,
    gender,
    category,
    brand,
  } = req.body

  // const key = req.params.key
  // const readStream = getFileStream(key)
  // console.log('HELLOO I AM WORKING NOW')
  // readStream.pipe(res)

  if (!title || !price || !image1 || !description) {
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
    imgUrl1: image1,
    imgUrl2: image2,
    imgUrl3: image3,
    imgUrl4: image4,
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
  console.log(req.body)
  const {
    title,
    condition,
    brand,
    price,
    description,
    category,
    image1,
    image2,
    image3,
    image4,
    gender,
  } = req.body

  const prodId = req.params.id

  const product = await Product.findByPk(prodId)

  product.title = title
  product.price = price
  product.imgUrl1 = image1
  product.imgUrl2 = image2
  product.imgUrl3 = image3
  product.imgUrl4 = image4
  product.description = description
  product.condition = condition
  product.category = category
  product.brand = brand
  product.gender = gender
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
  const user = await User.findOne({
    where: { email: process.env.ADMIN, isAdmin: true },
  })
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
}
