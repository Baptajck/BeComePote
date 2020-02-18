// const router = require('express').Router();
const users = require('./controllers/user.controller.js');


module.exports = (app) => {
  // Route for creating a user account
  app.post('/register', users.createAccount);
  // Route test to see everything
  app.get('/findAll', users.findAll);
  // Route to find a single user
  app.get('/profile/:id', users.findOneProfile);
  // Route to modify a user profile
  app.put('/profile/:id/modify', users.changeProfileUser);
  // Route to delete a user account
  // app.delete('/delete', Users.deleteAccount);
  // app.post('/login', Users.loginUser);
  // app.post('/logout', Users.logoutUser);
  // app.post('/forgotten', Users.forgottenPassword);
};
