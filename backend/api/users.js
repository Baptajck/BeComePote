/* eslint-disable no-console */
const express = require('express');
const bcrypt = require('bcrypt');


const router = express.Router();

const User = require('../Models/Users');


// Route for creating a user account
router.post('/register', (req, res) => {
  const { pseudo, email, password } = req.body;
  try {
    User.query()
      .insert({
        pseudo,
        email,
        password: bcrypt.hashSync(password, 10),
      })
      .then((user) => {
        res.json(user);
        console.log('Success, your profile has been created!');
      });
  }
  catch (err) {
    res.status(500).send({
      message:
        err.message || 'Some error has occurred while creating the user.',
    });
  }
});

// Route to see all users
router.get('/users', (req, res) => {
  User.query()
    .then((users) => {
      res.json(users);
      console.log('All users have been listed');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error has occurred while listing the users.',
      });
    });
});

// Route to get a single user
router.get('/user/:id', (req, res) => {
  const id = Number(req.params.id);
  User.query()
    .where('id', id)
    .then((user) => {
      res.json(user);
      console.log('Success, your profile has been displayed!');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error has occurred while displaying the user\'s profile.',
      });
    });
});

// Route for updating a user account
router.patch('/user/:id/edit', (req, res) => {
  const id = Number(req.params.id);
  const {
    firstname, lastname, pseudo, email, password, avatar, age, presentation,
  } = req.body;
  User.query()
    .findById(id)
    .patch({
      firstname,
      lastname,
      pseudo,
      email,
      password,
      avatar,
      age,
      presentation,
    })
    .then((newuser) => {
      res.json(newuser);
      console.log('Success, your profile has been updated!');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while updating the user\'s profile.',
      });
    });
});

// Route for deleting a user account
router.delete('/user/:id/delete', (req, res) => {
  const id = Number(req.params.id);
  User.query()
    .deleteById(id)
    .then((user) => {
      res.json(user);
      console.log('Success, your profile has been deleted!');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while trying to delete the user.',
      });
    });
});

// Route to connect a user
router.post('/connect', (req, res) => {
  const { email, password } = req.body;
  User.query()
    .where('email', email)
    .select('password', 'email')
    .then((result) => {
      if (!result) { // not found!
      // report invalid email
        console.log('email not exist', result);
        return;
      }
      const passwordIsValid = bcrypt.compareSync(password, result[0].password);
      console.log(`HASH ${result[0].password}`, `Je suis le password ${password}`, passwordIsValid);
      if (passwordIsValid) {
      // login
        console.log('Success, your connected', passwordIsValid);
      }
      else {
      // failed login
        res.status(500).send({
          message:
           'Not allowed',
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = {
  router,
};


// // app.post('/login', Users.loginUser);
// // app.post('/logout', Users.logoutUser);
// // app.post('/forgotten', Users.forgottenPassword);
