/* eslint-disable no-console */
const Sequelize = require('sequelize');

/*
 * CONNECTION SEQUELIZE
*/
// Sequelize Connection
const db = {};
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASS, {
  host: process.env.HOST,
  dialect: 'mysql',
  operatorsAliases: 0,
  logging: false,

  // Bout de code pour la mise en production !
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000,
  // },
});

/*
 * EXPORTS
*/
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
