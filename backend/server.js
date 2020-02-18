/* eslint-disable no-console */
// Import
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const Sequelize = require('sequelize');
// const sequelize = require('./config.js');
// const cors = require('cors');
const app = express();

const { PORT } = process.env;
const { HOST } = process.env;


/*
 * BODY-PARSER
*/
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    // TODO option à vérifier
    extended: false,
  }),
);

/*
 * HEADERS - CORS
*/
// TODO Utiliser CORS ou App.use lignes 24-30
// app.use(cors());
// app.use(express.favicon(`${__dirname}src/favicon/favicon.ico`));
app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', `http://${HOST}:8080`);
  // TODO If a cookie is needed
  // res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  // TODO Pas de bonnes pratiques trouvées pour cette ligne
  // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH, HEAD');
  next();
});


/*
 * LINK TO ROUTES THROUGH /API
*/
const apiRoutes = require('./routes');

app.use('/api', apiRoutes);

// /*
//  * SEQUELIZE AUTHENTIFICATION TEST
// */
// sequelize.authenticate()
//   .then(() => {
//     console.log('Congratulations, you are connected! Good luck with your new friends.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

// Start on assigned port
app.listen(PORT, () => {
  console.log(`Welcome, this server running at http://${HOST}:${PORT}`);
});
