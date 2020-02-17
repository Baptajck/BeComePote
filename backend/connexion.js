/* eslint-disable no-console */
// Import Sequelize
const Sequelize = require('sequelize');

// Sequelize Connection
const connectionDB = {};
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

// Sequelize Authentification Test
sequelize.authenticate()
  .then(() => {
    console.log('Congratulations, you are connected! Good luck with your new friends.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Exports
connectionDB.sequelize = sequelize;
connectionDB.Sequelize = Sequelize;

module.exports = connectionDB;
