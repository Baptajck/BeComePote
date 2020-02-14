const connectionDB = require('./connexion.js');

const runQuery = (query, res) => {
  // execute query
  connectionDB.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};


module.exports = {
  getDemoStories: (req, res) => {
    // requete SQL
    const query = 'SELECT * from user';
    // execute query
    runQuery(query, res);
  },
};
