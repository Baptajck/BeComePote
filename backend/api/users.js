/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const User = require('../Models/Users');
const Messages = require('../Models/Messages');
const HasMessages = require('../Models/HasMessages');
const withAuth = require('../middleware');

// SEND FILE TO CLOUDINARY
cloudinary.config({
  cloud_name: process.env.HOST_CLOUD,
  api_key: process.env.API_CLOUD,
  api_secret: process.env.API_SECRET,
});

/**
   * SEND CLOUDINARY - Route for creating a user account, checking if email
   * already exist and using bcyrpt to hash password
   * @param {object} req
   * @param {object} res
   * @returns {object} Image Cloudinary
   */
// Send to cloudinary
router.post('/uploads', (req, res) => {
  const userId = Number(req.session.user.id);
  const image = req.files.image.tempFilePath;

  cloudinary.uploader.upload(image, { public_id: `BeComePote_${userId}`, tags: 'BeComePote', folder: 'becomepote' }, (error, result) => {
    if (error) {
      res.status(503).send({
        message: 'Cannot reach Cloudinary server',
        error,
      });
      return;
    }
    // Query update avatar user
    User.query()
      .findById(userId)
      .patch({
        avatar: result.secure_url,
      })
      .then(() => res.status(200).send({
        message: 'Your avatar was successfully updated',
      }))
      .catch((errQuery) => res.status(500).send({
        message:
          errQuery.message || 'Your avatar has not been uploaded, an error occurred.',
      }));
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
  User.query()
    .where('email', email)
    .select('email')
    .then((user) => {
      if (user.length > 0) {
        res.status(409).send('Email already exist');
        return;
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
              pseudo: newUser.pseudo,
              avatar: 'https://i.imgur.com/1ttSyNq.jpg',
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
   * @returns {[object]} user/ array
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
   * READ - Route to get a single user with ID
   * @param {object} req
   * @param {object} res
   * @returns {[object]} user/ array
   */
router.get('/userWithId/:id', (req, res) => {
  const u = req.params.id;
  console.log(u);
  User.query()
    .findById(Number(u))
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
    .findById(id)
    .then((user) => {
      HasMessages.query()
      .where('has_message.user_id', id)
      .then((t) => {
        // This deletes the user's chat messages
        t.forEach(element => {
          Messages.query()
          .findById(element.chat_message_id)
          .then((u) => {
            Messages.query()
            .deleteById(u.id)
            .then((messageDelete) => {
              res.status(200).send(messageDelete)
            })
            .catch((err) => {
              res.status(500).send({
              message:
                err.message || 'Some error occurred when deleting the user\'s message.',
            })
            console.log(err.message);
            })
          })
        });
        // This deletes the user's account
        t.forEach(element => {
          User.query()
          .deleteById(element.user_id)
          .then((userDelete) => {
             res.status(200).send(userDelete)
            .catch((err) => {
              res.status(500).send({
              message:
                err.message || 'Some error occurred when deleting the user\'s profile.',
            })
            console.log(err.message);
            })
          })
        });
        // This enables the relationship table HasMessage to be emptied when an user deletes his account
        t.forEach(element => {
          HasMessages.query()
          .deleteById(element.id)
          .then((hasMessageDelete) => {
            res.status(200).send(hasMessageDelete)
            .catch((err) => {
              res.status(500).send({
              message:
                err.message || 'Some error occurred when deleting the user\'s messages.',
            })
            console.log(err.message);
            })
          })
        });

      })
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
    .select('id', 'email', 'password', 'pseudo', 'avatar')
    .then((user) => {
      if (!user.length > 0) {
        res.status(401).send('Email is wrong');
        return;
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
          pseudo: user[0].pseudo,
          avatar: user[0].avatar,
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
   * @returns {string}
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
