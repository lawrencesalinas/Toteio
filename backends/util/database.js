const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('Tote-io', 'root', 'Glare356s17s*', {
  dialect: 'mysql',
  host: 'localhost',
})

module.exports = sequelize
