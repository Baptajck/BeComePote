// ImPORT_BACK
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const Message = require('./Models/Messages')

const {
  PORT_BACK, PORT_FRONT, HOST, // FRONT_URL,
} = process.env;


// SOCKET IO
// ===================================================================================
const Server = require('http').Server;
const socket = require('socket.io');


const app = express();
const server = Server(app);
const io = socket(server, { log: false, origins: '*:*' });
const port = process.env.PORT || 5000;

let chatmessageIdToIncrement = 0;
let reviewIdToIncrement = 0;

io.on('connection', (socket) => {
  console.log('>> socket.io - connected');
  
  // to avoid duplicates between websocket and db chatmessage ids
  Message.query()
  .then((messages) => {
    chatmessageIdToIncrement = Math.max(...messages.map(oneMessage => oneMessage.id)); 
  });  

  socket.on('send_message', (message) => {
    message.id = ++chatmessageIdToIncrement;
    io.emit('send_message', message);
  });
})

server.listen(port, () => console.log(`>> Listening for chat : ${port}`));

// CORS SETUP & OPTIONS
// ===================================================================================
const Origins = ['http://becomepote.fr', 'http://becomepote.fr:3000/api/$/', '/\.becomepote\.fr$/', `http://localhost:${PORT_FRONT}`, `http://localhost:${PORT_BACK}`,`http://localhost:${port}`];
// const Origins2 = ['http://becomepote.fr', 'http://becomepote.fr:3000'];


const corsOptions = {
  origin: Origins,
  methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Origin', 'Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Access-Control-Request-Method', 'Access-Control-Request-Headers'],
  exposedHeaders: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Credentials', 'Content-Range', 'X-Content-Range'],
  credentials: true,
  preflightContinue: true,
  optionsSuccessStatus: 200,
};

// BODYPARSER
// ===================================================================================
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

// SESSION
// ===================================================================================
app.use(session({
  secret: process.env.SECRET,
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

// FILE UPLOAD
// ===================================================================================
app.use(fileUpload({ useTempFiles: true }));

// Start on assigned port
// ===================================================================================
app.listen(PORT_BACK, () => {
console.log(`>> Welcome, this server running at http://${HOST}:${PORT_BACK}`);
});


// CORS PREFLIGHT REQUESTS
// ===================================================================================
app.use(cors(corsOptions));

// ROUTES
// ===================================================================================
app.use('/api', require('./api/users').router);
app.use('/api', require('./api/question').router);
app.use('/api', require('./api/message').router);
app.use('/email', require('./email/email.model').router);

