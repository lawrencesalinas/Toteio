const path = require('path')

const express = require('express')
const dotenv = require('dotenv')
const sequelize = require('./util/database')
const cors = require('cors')
const PORT = process.env.PORT || 8000
const { errorHandler } = require('./middleware/errorMiddleware')

const Product = require('./models/productModel')
const User = require('./models/userModel')
const ShoppingBag = require('./models/shoppingBagModel')
const ShoppingBagItem = require('./models/shoppingBagItemModel')
const Order = require('./models/orderModel')
const OrderItem = require('./models/orderItemModel')

dotenv.config()

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

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/products/', require('./routes/productRoutes'))
app.use('/api/shoppingBag/', require('./routes/shoppingBagRoutes'))
app.use('/api/orders/', require('./routes/orderRoutes'))
app.use('/api/uploads/', require('./routes/uploadRoutes'))
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to My E-store' })
})

app.use('/images', express.static(path.join(__dirname, '/images')))
app.use(errorHandler)

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })
User.hasMany(Product)
User.hasOne(ShoppingBag)
ShoppingBag.belongsTo(User)
ShoppingBag.belongsToMany(Product, { through: ShoppingBagItem })
Product.belongsToMany(ShoppingBag, { through: ShoppingBagItem })
Order.belongsTo(User)
User.hasMany(Order)
Order.belongsToMany(Product, { through: OrderItem })

sequelize
  // .sync({ force: true })
  .sync()

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`)
})
