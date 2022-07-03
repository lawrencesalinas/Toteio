const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Product = require('../models/productModel')
const ShoppingBagItem = require('../models/shoppingBagItemModel')

// @desc   Get all user cart items
// @route  GET /api/shoppingBag
// @access Private
const getShoppingBag = asyncHandler(async (req, res) => {
  const shoppingBag = await req.user.getShoppingBag()

  const products = await shoppingBag.getProducts()

  res.status(200).json(products)
})

// @desc   Add products to shopping bag
// @route  POST /api/shoppingBag
// @access Private
const addToShoppingBag = asyncHandler(async (req, res) => {
  const { productId } = req.body

  const cart = await req.user.getShoppingBag()
  const productSequelize = await cart.getProducts({ where: { id: productId } })

  const manageProductAndQty = async () => {
    if (productSequelize.length > 0) {
      const product = productSequelize[0]
      const oldQuantity = product.shoppingBagItem.quantity
      const quantity = oldQuantity + 1
      return { product, quantity }
    } else {
      const product = await Product.findByPk(productId)
      return { product, quantity: 1 }
    }
  }

  const { product, quantity } = await manageProductAndQty()
  await cart.addProduct(product, {
    through: { quantity: quantity },
  })
  res.status(201).json({ product, quantity })
})

// @desc  Delete products from shopping bag
// @route  DELETE /api/shoppingBag
// @access Private
const deleteShoppingBagItem = asyncHandler(async (req, res) => {
  console.log('delete is hit')
  const productId = req.params.id
  console.log(req.user)

  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
  const shoppingBag = await req.user.getShoppingBag()

  const products = await shoppingBag.getProducts({ where: { id: productId } })
  const product = products[0]
  product.shoppingBagItem.destroy()
  res.status(200).json({ message: 'Deleted from bag' })
})

module.exports = {
  getShoppingBag,
  addToShoppingBag,
  deleteShoppingBagItem,
}
