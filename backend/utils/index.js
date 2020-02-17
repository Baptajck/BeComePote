const connectionDB = require('../connexion.js');

module.exports = {
  // Connect and xecute query
  runQuery: (query, res) => {
    connectionDB.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
