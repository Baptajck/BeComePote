/* eslint-disable no-console */
// Import
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

// const cors = require('cors');

const app = express();
const { PORT } = process.env;
const { HOST } = process.env;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

// TODO Utiliser CORS ou App.use lignes 24-30
// app.use(cors());
// app.use(express.favicon(`${__dirname}src/favicon/favicon.ico`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', `http://${HOST}:8080`);
  // TODO If a cookie is needed
  // res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  // TODO Pas de bonnes pratiques trouvées pour cette ligne
  // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH, HEAD');
  next();
});

// Start on assigned port
app.listen(PORT, () => {
  console.log(`Welcome, this server running at http://${HOST}:${PORT}`);
});

// Routes
app.use('/api', require('./api/users').router);
