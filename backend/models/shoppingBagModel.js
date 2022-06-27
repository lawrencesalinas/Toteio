const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const ShoppingBag = sequelize.define('shoppingBag', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
})

module.exports = ShoppingBag
