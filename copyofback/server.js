const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 8000
const sequelize = require('./util/database')
const Product = require('./models/productModel')
const User = require('./models/userModel')
const cors = require('cors')
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

const app = express()

// set cors headers middlware
app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/products/', require('./routes/productRoutes'))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to My E-store' })
})

app.use(errorHandler)

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })
User.hasMany(Product)

sequelize.sync()

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`)
})
