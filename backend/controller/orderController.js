const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Product = require('../models/productModel')
const ShoppingBagItem = require('../models/shoppingBagItemModel')
const Order = require('../models/orderModel')

const postOrder = asyncHandler(async (req, res) => {
  const shoppingBag = await req.user.getShoppingBag()
  const products = await shoppingBag.getProducts()
  const order = await req.user.createOrder()
  const orderProducts = await order.addProducts(
    products.map((product) => {
      product.orderItem = { quantity: product.shoppingBagItem.quantity }
      //   console.log(product.orderItem)
      return product
    })
  )
  res.status(201).json(orderProducts)
})

module.exports = {
  postOrder,
}
