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

const Origins = ['http://becomepote.fr', 'http://www.becomepote.fr', `http://localhost:${PORT_FRONT}`, `http://localhost:${PORT_BACK}`];

// CORS
app.use(
  cors({
    origin: Origins,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
    exposedHeaders: 'Authorization',
    credentials: true,
  }),
);


// BODYPARSER
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

// SESSION
app.use(session({
  secret: process.env.SECRET,
  name: 'myCookie',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 365 * 24 * 60 * 60 * 1000,
  },
}));

// COOKIE
app.use(cookieParser());

// TODO Gérer le flavicon pour le back
// app.use(express.favicon(`${__dirname}src/favicon/favicon.ico`));

// Start on assigned port
app.listen(PORT_BACK, () => {
  console.log(`Welcome, this server running at http://${HOST}:${PORT_BACK}`);
});

// Routes
app.use('/api', require('./api/users').router);
app.use('/api', require('./api/question').router);
app.use('/email', require('./email/email.model').router);
