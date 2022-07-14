require('dotenv').config('../.env')

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  dialectModule: require('mysql2'),
}
