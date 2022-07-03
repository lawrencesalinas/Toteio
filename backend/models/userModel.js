const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    alllowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  address: {
    type: Sequelize.STRING,
    alllowNull: true,
  },
  phone: {
    type: Sequelize.STRING,
    alllowNull: false,
  },

  password: {
    type: Sequelize.STRING,
    alllowNull: false,
  },

  isAdmin: {
    type: Sequelize.BOOLEAN,
    alllowNull: false,
    defaultValue: false,
  },
})

module.exports = User
