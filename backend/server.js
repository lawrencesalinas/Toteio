const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const sequelize = require('./util/database')
const cors = require('cors')
const PORT = process.env.PORT || 8000
const { errorHandler } = require('./middleware/errorMiddleware')

const Product = require('./models/productModel')
const User = require('./models/userModel')

dotenv.config()
// const multer = require('multer')

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

const app = express()

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, 'images'))
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString() + '-' + file.originalname)
//   },
// })

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'image/jpg' ||
//     file.mimetype === 'image/jpeg'
//   ) {
//     cb(null, true)
//   } else {
//     cb(null, false)
//   }
// }

// set cors headers middlware
app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use(
//   multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
// )

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/products/', require('./routes/productRoutes'))
app.use('/api/uploads/', require('./routes/uploadRoutes'))
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to My E-store' })
})

app.use('/images', express.static(path.join(__dirname, '/images')))
app.use(errorHandler)

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })
User.hasMany(Product)

sequelize.sync()

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`)
})
