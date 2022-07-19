const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  brand: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  countInStock: {
    type: Sequelize.INTEGER,
  },
  condition: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
  },
  imgUrl1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imgUrl2: {
    type: Sequelize.STRING,
  },
  imgUrl3: {
    type: Sequelize.STRING,
  },
  imgUrl4: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT('long'),
    allowNull: false,
  },
})

module.exports = Product
