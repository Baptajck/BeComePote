const Users = require('./Models/Users.js');

module.exports = (app) => {
  app.post('/register', Users);
  // app.post('/login', Users.loginUser);
  // app.post('/logout', Users.logoutUser);
  // app.post('/forgotten', Users.forgottenPassword);
  // app.get('/profile/:id', Users.profileUser);
  // app.post('/profile/modify/:id', Users.changeProfileUser);
};
