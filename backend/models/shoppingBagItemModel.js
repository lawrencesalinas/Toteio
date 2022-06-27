const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const ShoppingBagItem = sequelize.define('shoppingBagItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: Sequelize.INTEGER,
})

module.exports = ShoppingBagItem
