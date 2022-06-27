const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()

const sequelize = new Sequelize('Tote-io', 'root', process.env.DBPASS, {
  dialect: 'mysql',
  host: 'localhost',
})

module.exports = sequelize
