/* eslint-disable no-console */
/* eslint-disable camelcase */
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../Models/Users');
const {
  transporter,
  getPasswordResetURL,
  resetPasswordTemplate,
} = require('./email');

// Generating a hashedToken to set the timestamp on reset password link
const usePasswordHashToMakeToken = ({ password: passwordHash, id: userId, created_at }) => {
  const secret = `${passwordHash}-${created_at}`;
  const token = jwt.sign({ userId }, secret, {
    expiresIn: 3600, // 1 hour
  });
  return token;
};

//
router.post('/user/:email', (req, res) => {
  const { email } = req.params;
  let user;
  try {
    user = User.quey().findOne({ email });
  }
  catch (err) {
    res.status(404).json('No user with that email');
  }
  const token = usePasswordHashToMakeToken(user);
  const url = getPasswordResetURL(user, token);
  const emailTemplate = resetPasswordTemplate(user, url);

  const sendEmail = () => {
    transporter.sendMail(emailTemplate, (err, info) => {
      if (err) {
        res.status(500).json('Error sending email');
      }
      console.log('** Email sent **', info.response);
    });
  };
  sendEmail();
});

router.post('/receive_new_password/:userId/:token', (req, res) => {
  const { userId, token } = req.params;
  const { password } = req.body;

  User.findOne({ id: userId })

    .then((user) => {
      const secret = `${user.password}-${user.created_at}`;
      const payload = jwt.decode(token, secret);
      if (payload.userId === user.id) {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) return;
          bcrypt.hashSync(password, salt, (hash) => {
            if (err) return;
            User.findOneAndUpdate({ id: userId }, { password: hash })
              .then(() => res.status(202).json('Password changed accepted'))
              .catch(() => res.status(500).json(err));
          });
        });
      }
    })

    .catch(() => {
      res.status(404).json('Invalid user');
    });
});
