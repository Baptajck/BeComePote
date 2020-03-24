/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const router = express.Router();
const User = require('../Models/Users');
const publicKEY = fs.readFileSync('key/public.key', 'utf8');
const privateKEY = fs.readFileSync('key/private.key', 'utf8');

const withAuth = require('../middleware');


const checkToken = (req, res, next) => {
  const header = req.headers.authorization;

  if (typeof header !== 'undefined') {
    const bearer = header.split(' ');
    const token = bearer[1];

    req.token = token;
    next();
  }
  else {
    // If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
};

/**
   * RECUP TOKEN -
   * @param {object} req
   * @param {object} res
   * @func checkToken
   * @returns {object} user object
   */
router.get('/user/data', checkToken, (req, res) => {
  // verify the JWT token generated for the user
  jwt.verify(req.token, publicKEY, (err, authorizedData) => {
    if (err) {
      // If error send Forbidden (403)
      console.log('ERROR: Could not connect to the protected route');
      res.sendStatus(403);
    }
    else {
      // If token is successfully verified, we can send the autorized data
      res.json({
        message: 'Successful log in',
        authorizedData,
      });
      console.log('SUCCESS: Connected to protected route');
    }
  });
});


/**
   * CREATE - Route for creating a user account, checking if email
   * already exist and using bcyrpt to hash password
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
router.post('/register', (req, res) => {
  const { pseudo, email, password } = req.body;
  // const privateKEY = fs.readFileSync('key/private.key', 'utf8');
  const signOptions = {
    issuer: 'becomepote',
    subject: 'information utilisateur',
    audience: 'http://becompote.fr',
    expiresIn: '24h',
    algorithm: 'RS256',
  };
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
            const token = jwt.sign({ newUser }, privateKEY, signOptions);
            res.cookie('registerUserToken', token, {
              expires: new Date(Date.now() + 86400),
              secure: false, // set to true if your using https
              httpOnly: true,
            });
            res.status(201).send({
              message: 'Bravo ! Votre compte à été crée avec succès',
              token,
            });
            res.json(token);
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
router.get('/user/:id', (req, res) => {
  const id = Number(req.params.id);
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
router.patch('/user/:id/edit', (req, res) => {
  const id = Number(req.params.id);
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
router.delete('/user/:id/delete', (req, res) => {
  const id = Number(req.params.id);
  User.query()
    .deleteById(id)
    .then((user) => {
      res.json(user);
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
  // const privateKEY = fs.readFileSync('key/private.key', 'utf8');
  // const publicKEY = fs.readFileSync('key/public.key', 'utf8');
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
        // Signature options of the encryption key
        const signOptions = {
          issuer: 'becomepote',
          subject: 'information utilisateur',
          audience: 'http://becomepote.fr',
          expiresIn: '24h',
          algorithm: 'RS256',
        };
        const token = jwt.sign({ user }, privateKEY, signOptions);
        res.cookie('userToken', token, {
          expires: new Date(Date.now() + 90000),
          // secure: true, if https enabled
          maxAge: 1296000000,
          secure: false,
          httpOnly: true,
        });

        // TODO CHECK ENCRYPTION KEY AND IF COOKIE IS EMPTY ERR.MESSAGE DISPLAYS
        // Check if encryption key is correct
        // const verifyOptions = {
        //   issuer: 'becomepote',
        //   subject: 'information utilisateur',
        //   audience: 'http://becomepote.fr',
        //   expiresIn: '24h',
        //   notBefore: '60s',
        //   algorithm: ['RS256'],
        // };
        // const verifyToken = jwt.verify(token, publicKEY, verifyOptions);
        if (token.length === 0) {
          res.json(token);
          res.status(401).send({ message: 'You need to login to access this page.' });
        }
        res.status(200).send({
          message: 'Vous êtes connecté',
          token,
        }).redirect('/profile');
      }
    })
    .catch((err) => res.status(500).send({
      message:
           err.message || 'Login was unsuccessful, please try again',
    }));
});


router.get('/checkToken', withAuth, (req, res) => {
  res.sendStatus(200);
});

module.exports = {
  router,
};
