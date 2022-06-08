const express = require('express')

const router = express.Router()
const {
  registerUser,
  loginUser,
  getUsers,
  getUserProfile,
  updateUser,
} = require('../controller/userController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getUsers).post(registerUser).put(protect, updateUser)
router.post('/login', loginUser)
router.get('/profile', protect, getUserProfile)

module.exports = router
