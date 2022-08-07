const express = require('express')

const router = express.Router()
const {
  registerUser,
  loginUser,
  getUsers,
  getUserProducts,
  getUserProfile,
  updateUser,
} = require('../controller/userController')

const { protect } = require('../middleware/authMiddleWare')

router.route('/').get(getUsers).post(registerUser).put(protect, updateUser)
router.post('/login', loginUser)
router.route('/profile').get(protect, getUserProfile)

router.route('/products').get(protect, getUserProducts)

module.exports = router
