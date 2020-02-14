// Import MySQL
const mysql = require('mysql');

// MySQL connection
const connectionDB = mysql.createConnection({
  host: 'localhost',
  user: 'becomepote',
  password: 'lespotes',
  database: 'becomepote',
});

connectionDB.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = connectionDB;
