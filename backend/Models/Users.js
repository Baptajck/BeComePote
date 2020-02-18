const Sequelize = require('sequelize');
// const { runQuery } = require('./utils/index.js');
const connectionDB = require('../connexion.js');

module.exports = connectionDB.sequelize.define('users', {
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  token: {
    type: Sequelize.STRING(64),
    notNull: false,
  },
  firstname: {
    type: Sequelize.STRING,
    notNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    notNull: false,
  },
  pseudo: {
    type: Sequelize.STRING(15),
    notNull: false,
  },
  email: {
    type: Sequelize.STRING,
    notNull: false,
  },
  password: {
    type: Sequelize.STRING(64),
    notNull: false,
  },
  avatar: {
    type: Sequelize.STRING(128),
    notNull: true,
  },
  age: {
    type: Sequelize.STRING(10),
    notNull: true,
  },
  presentation: {
    type: Sequelize.TEXT,
    notNull: true,
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updated_at: {
    type: Sequelize.DATE,
  },
},
// Options
{
  timestamps: false,
});

// module.exports = {


// module.exports = {
//   registerNewUser: (req, res) => {
//     // requete SQL
//     const query = 'INSERT INTO user (email, password, created_at) VALUES (\'clement@pain.froid\', \'prout\', current_timestamp());';
//     // connect and execute query
//     runQuery(query, res);
//   },
// };
