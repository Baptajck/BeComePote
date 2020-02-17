const Sequelize = require('sequelize');
// const { runQuery } = require('./utils/index.js');
const connectionDB = require('./connexion.js');

module.exports = connectionDB.sequelize.define(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: {
      type: Sequelize.STRING,
    },
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    pseudo: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    avatar: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.STRING,
    },
    presentation: {
      type: Sequelize.TEXT,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
  },
);

// module.exports = {
//   registerNewUser: (req, res) => {
//     // requete SQL
//     const query = 'INSERT INTO user (email, password, created_at) VALUES (\'clement@pain.froid\', \'prout\', current_timestamp());';
//     // connect and execute query
//     runQuery(query, res);
//   },
// };
