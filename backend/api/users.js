/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../Models/Users');
const withAuth = require('../middleware');


/**
   * CREATE - Route for creating a user account, checking if email
   * already exist and using bcyrpt to hash password
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
router.post('/register', (req, res) => {
  const { pseudo, email, password } = req.body;
  User.query()
    .where('email', email)
    .select('email')
    .then((user) => {
      if (user.length > 0) {
        res.status(409).send('Email already exist');
      }
      if (!email || !password || !pseudo) {
        res.status(400).send({ message: 'One or more values are missing for creating account' });
      }
      else {
        User.query()
          .insert({
            pseudo,
            email,
            password: bcrypt.hashSync(password, 10),
          })
          .then((newUser) => {
            // SESSION
            const userSession = {
              id: newUser.id,
              email: newUser.email,
            };
            req.session.user = userSession;
            const { session } = req;
            const response = {
              status: 'Created account',
              session,
            };
            res.status(201).send(response);
            res.json(response);
          });
      }
    })
    .catch((err) => res.status(500).send({
      message:
          err.message || 'An error has occurred while creating your account.',
    }));
});

/**
   * READ - Route to see all users
   * @param {object} req
   * @param {object} res
   * @returns {object} users array
   */
router.get('/users', (req, res) => {
  User.query()
    .then((users) => {
      res.json(users);
      res.status(200).send('All users have been successful listed!');
    })
    .catch((err) => res.status(500).send({
      message:
          err.message || 'An error has occurred while listing the users.',
    }));
});

/**
   * READ - Route to get a single user
   * @param {object} req
   * @param {object} res
   * @returns {[object]} user/:id array
   */
router.get('/user', (req, res) => {
  const id = Number(req.session.user.id);
  User.query()
    .where('id', id)
    .then((user) => {
      res.json(user);
      res.status(200).send('The user\'s profile has been successful displayed!');
    })
    .catch((err) => res.status(500).send({
      message:
          err.message || 'Some error has occurred while displaying the user\'s profile.',
    }));
});

/**
   * UPDATE - Route for updating a user account
   * @param {object} req
   * @param {object} res
   * @returns {Boolean} return True or False
   */
router.patch('/user/edit', (req, res) => {
  const id = Number(req.session.user.id);
  const {
    firstname, lastname, pseudo, email, avatar, age, presentation,
  } = req.body;
  User.query()
    .findById(id)
    .patch({
      firstname,
      lastname,
      pseudo,
      email,
      avatar,
      age,
      presentation,
    })
    .then((userUpdated) => {
      res.json(userUpdated);
      res.status(200).send('Your profile has been updated!');
    })
    .catch((err) => res.status(500).send({
      message:
          err.message || 'Some error occurred while updating the user\'s profile.',
    }));
});

/**
   * DELETE - Route for deleting a user account
   * @param {object} req
   * @param {object} res
   * @returns {Boolean} return True or False
   */
router.delete('/user/delete', (req, res) => {
  const id = Number(req.session.user.id);
  User.query()
    .deleteById(id)
    .then(() => {
      req.session.destroy();
      res.clearCookie('myCookie');
      res.status(200).send('Success, your profile has been deleted!');
    })
    .catch((err) => res.status(500).send({
      message:
          err.message || 'Some error occurred while trying to delete the user.',
    }));
});

/**
   * LOGIN - Route to connect a user
   * @param {object} req
   * @param {object} res
   * @returns {[object]} user object
   */
router.post('/connect', (req, res) => {
  const { email, password } = req.body;
  User.query()
    .where('email', email)
    .select('id', 'email', 'password')
    .then((user) => {
      if (!user.length > 0) {
        res.status(401).send('Email is wrong');
      }
      const passwordIsValid = bcrypt.compareSync(password, user[0].password);
      if (!passwordIsValid) {
        res.status(401).send('Password is wrong');
      }
      else {
        // SESSION
        const userSession = {
          id: user[0].id,
          email: user[0].email,
        };
        req.session.user = userSession;
        const { session } = req;
        const response = {
          status: 'Logged in',
          session,
        };
        res.status(200).send(response);
      }
    })
    .catch((err) => res.status(500).send({
      message:
           err.message || 'Login was unsuccessful, please try again',
    }));
});

/**
   * LOGOUT - Route to connect a user
   * @param {object} req
   * @param {object} res
   * @returns string
   */
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('myCookie');
  res.send({ result: 'OK', message: 'Session destroyed' });
});

/**
   * CHECK-TOKEN - Route to connect a user
   * @func checktoken
   * @param {object} req
   * @param {object} res
   * @returns {object}
   */
router.get('/checkToken', withAuth, (req, res) => {
  res.json(req.session.user);
  res.sendStatus(200);
});

module.exports = {
  router,
};
