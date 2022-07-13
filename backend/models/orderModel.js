const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  shippingAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // subtotal: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  // total: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  // subtotal: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // delivery_status: {
  //   type: Sequelize.STRING,
  //   defaultValue: 'pending',
  // },
  // payment_status: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
})

module.exports = Order
