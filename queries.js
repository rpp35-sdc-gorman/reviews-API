const { Sequelize } = require('sequelize');

const sequelize = new Sequelize ('reviews', 'me', 'password', {
  host: 'localhost',
  dialect: 'postgres'
})