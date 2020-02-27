// Initialize knex and database connection
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
  },
});

console.log('Congratulations, you are now connected! Good luck meeting new friends.');

module.exports = knex;
