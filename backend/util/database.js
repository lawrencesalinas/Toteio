const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASS,
  {
    dialect: process.env.DB_DIALECT,
    host: process.env.HOST,
  }
)

module.exports = sequelize
