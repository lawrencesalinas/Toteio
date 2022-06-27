const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Product = require('../models/productModel')
const Bag = require('../models/shoppingBagModel')

// @desc   Get all user cart items
// @route  GET /api/cart
// @access Public
const getShoppingBag = asyncHandler(async (req, res) => {
  const shoppingBag = await req.user.getShoppingBag()

  const products = await shoppingBag.getProducts({
    where: { userId: req.user.id },
  })

  // const products = await
  res.status(200).json(products)
})

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

module.exports = {
  getShoppingBag,
  addToShoppingBag,
}
