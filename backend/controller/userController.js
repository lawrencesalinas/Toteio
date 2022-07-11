const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

const sendEmail = require('../util/sendEmail')

const User = require('../models/userModel')
const Product = require('../models/productModel')

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.findAll()
  res.status(200).json(users)
})

// @desc    Register a new user
// @route   /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, isAdmin } = req.body

  const message = `Hi ${name} ,

  Welcome to Tote.io. I am thrilled to see you here!
  
  I am confident that Tote-io will help you find products that suits your needs
 
  
  Take care!
  Lawrence Salinas`

  console.log(req.body)
  //   Validation
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please include all fields')
  }

  // Find if user exists
  const userExists = await User.findOne({ where: { email } })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashPassword,
    isAdmin: isAdmin,
  })

  user.createShoppingBag()

  if (user.isAdmin) {
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: true,
      token: generateToken(user.id),
    })
    sendEmail(email, 'tote.ioshop@gmail.com', 'Welcome To Tote-io', message)
  } else if (user) {
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    })
    sendEmail(email, 'tote.ioshop@gmail.com', 'Welcome to Tote-io', message)
  } else {
    res.status(400)
    throw new error('Invalid user data')
  }
})

// @desc    login a  userit
// @route   /api/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ where: { email } })
  const userAdmin = await User.findOne({ where: { email, isAdmin: true } })

  // Check user and passwords match
  if (userAdmin && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      id: userAdmin.id,
      name: userAdmin.name,
      email: userAdmin.email,
      isAdmin: userAdmin.isAdmin,
      token: generateToken(user.id),
    })
  } else if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid Credentials')
  }
})

// @desc    Get current user
// @route   /api/users/me
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  // res.status(200).json(req.user)
  const user = {
    id: req.user.id,
    email: req.user.email,
    name: req.user.name,
    isAdmin: req.isAdmin,
  }
  res.status(200).json(user)
})

// @desc    update user
// @route   /api/users
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const { updatedName, updatedEmail, updatedAddress, updatedPhone } = req.body

  const user = req.user

  if (user) {
    await user.update({
      name: updatedName || user.name,
    })

    console.log(user, 'HELLLLLLLOOOOO')

    await user.save()
    res.status(200).json(user)
  } else {
    console.log('REJECT')
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc   Get user products
// @route  GET /api/users/products
// @access Private
const getUserProducts = asyncHandler(async (req, res) => {
  const products = await Product.findAll({ where: { userId: req.user.id } })
  if (!products) {
    res.status(404)
    throw new Error('No products found')
  }
  res.status(200).json(products)
})

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  getUserProfile,
  getUserProducts,
  updateUser,
}
