/* eslint-disable no-console */
// Import
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

// const cors = require('cors');

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
// app.use(cors());
// app.use(express.favicon(`${__dirname}src/favicon/favicon.ico`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', `http://${hostname}:8080`);
  //   res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  //   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH, HEAD');
  next();
});


// Start on assigned port
app.listen(port, () => {
  console.log(`Welcome, this server running at http://${hostname}:${port}`);
});

// Importing route
const routes = require('./routes');

// Importing express.Router for routes
routes(express.Router());
