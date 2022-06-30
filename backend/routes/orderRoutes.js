const express = require('express')
const router = express.Router()
const { postOrder } = require('../controller/orderController')

const { protect } = require('../middleware/authMiddleWare')

router.route('/').get().post(protect, postOrder)

module.exports = router
