/* eslint-disable no-console */
// ImPORT_BACK
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session');

const app = express();
const {
  PORT_BACK, PORT_FRONT, HOST, // FRONT_URL,
} = process.env;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

// SESSION
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    maxAge: 60000,
  },
}));

// COOKIE
app.use(cookieParser());
app.use(
  cors({
    origin: [
      `http://${HOST}:${PORT_FRONT}`,
      `http://${HOST}:${PORT_BACK}`,
    ],
    credentials: true,
  }),
);


// TODO Gérer le flavicon pour le back
// app.use(express.favicon(`${__dirname}src/favicon/favicon.ico`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', `http://${HOST}:${PORT_FRONT}`);
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'Authorization');
  // TODO Pas de bonnes pratiques trouvées pour cette ligne
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept X-Requested-With, Authorization, Accept, Client-Security-Token, Accept-Encoding');
  // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH, HEAD');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PATCH');
  next();
});

// Start on assigned port
app.listen(PORT_BACK, () => {
  console.log(`Welcome, this server running at http://${HOST}:${PORT_BACK}`);
});

// Routes
app.use('/api', require('./api/users').router);
app.use('/email', require('./email/email.model').router);
