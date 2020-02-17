const Sequelize = require('sequelize');
// const { runQuery } = require('./utils/index.js');
const connectionDB = require('../connexion.js');

module.exports = connectionDB.sequelize.define('users', {
  // attrbiutes
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  token: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pseudo: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },

  avatar: {
    type: Sequelize.STRING(128),
    allowNull: true,
  },
  age: {
    type: Sequelize.STRING(10),
    allowNull: true,
  },
  presentation: {
    type: Sequelize.TEXT,
    allowNull: true,
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
//   registerNewUser: (req, res) => {
//     // requete SQL
//     const query = 'INSERT INTO user (email, password, created_at) VALUES (\'clement@pain.froid\', \'prout\', current_timestamp());';
//     // connect and execute query
//     runQuery(query, res);
//   },
// };
