/* eslint-disable no-console */
// ImPORT_BACK
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const {
  PORT_BACK, PORT_FRONT, HOST, FRONT_URL,
} = process.env;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

// COOKIE
app.use(cookieParser());
app.use(
  cors({
    origin: [
      `${FRONT_URL}`,
      `http://${HOST}:${PORT_BACK}`,
    ],
    credentials: true,
  }),
);


// TODO Gérer le flavicon pour le back
// app.use(express.favicon(`${__dirname}src/favicon/favicon.ico`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', `http://${HOST}:${PORT_FRONT}`);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  // TODO Pas de bonnes pratiques trouvées pour cette ligne
  // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH, HEAD');
  // res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH');
  next();
});

// Start on assigned port
app.listen(PORT_BACK, () => {
  console.log(`Welcome, this server running at http://${HOST}:${PORT_BACK}`);
});

// Routes
app.use('/api', require('./api/users').router);
