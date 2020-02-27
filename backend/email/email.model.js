/* eslint-disable no-console */
/* eslint-disable camelcase */
const express = require('express');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Models/Users');

// Identification to our sender provider - Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_LOGIN,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Generation of the Password Reset URL with token and dynamic ID User
const getPasswordResetURL = (user, token) => `http://localhost:3000/password/reset/${user.id}/${token}`;


// Generating a hashedToken to set the timestamp on reset password link valid for an hour
const usePasswordHashToMakeToken = ({ password: passwordHash, id: userId, created_at }) => {
  const secret = `${passwordHash}-${created_at}`;
  const token = jwt.sign({ userId }, secret, {
    expiresIn: 3600, // 1 hour
  });
  return token;
};

/**
   * CREATE - Sends an email to the User following his password request through our Gmail account
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
router.post('/user/:email', (req, res, next) => {
  const { email } = req.params;
  User.query()
    .where('email', email)
    .then((user) => {
      const resetPasswordTemplate = (url) => {
        const from = process.env.EMAIL_LOGIN;
        const to = email;
        const subject = 'BeComePote - Changement de mot de passe';
        const html = `
          <img src="https://i.imgur.com/UntF77V.png" alt="logo">
          <h1 style="font-size: 18px; color: #f7862f">Bonjour ${user[0].pseudo},</h1>
          <p>Vous avez perdu votre mot de passe chez BeComePote, nous allons vous aider à en créer un nouveau. Si cette demande de nouveau mot de passe ne vient pas de vous, vous pouvez ignorer cet email.</p>
          <p>Cette procédure va vous diriger vers une page de BeComePote où vous allez pouvoir définir un nouveau mot de passe pour votre compte.</p>
          <p>Merci de cliquer sur le lien suivant pour créer un nouveau mot de passse &nbsp;:</p>
          <a href=${url}>Cliquez ici pour créer un nouveau mot de passe</a>
          <p>Ce lien est actif pour une heure avant d'être périmé.</p>
          <p>Merci de faire confiance à </p>
          <p style="color: #f7862f">– BeComePote –</p>
          `;
        return {
          from, to, subject, html,
        };
      };
      const token = usePasswordHashToMakeToken(user);
      const url = getPasswordResetURL(user[0], token);
      const emailTemplate = resetPasswordTemplate(url);

      const sendEmail = () => {
        transporter.sendMail(emailTemplate, (err) => {
          if (err) {
            res.status(400);
            res.json('Email has not been sent!');
            next();
          }
          else {
            res.json('Email to reset password has been sent to user.');
            next();
          }
        });
      };
      sendEmail();
    })
    .catch(() => {
      res.status(404).json('No user with that email');
    });
});

// TODO Route pour être raccord avec celle envoyé dans le mail !!
// Grants access with token to the form to change the user's password
router.post('/receive_new_password/:userId/:token', (req, res) => {
  const { userId, token } = req.params;
  const { password } = req.body;

  User.query().where({ id: userId })

    .then((user) => {
      const secret = `${user.password}-${user.created_at}`;
      const payload = jwt.decode(token, secret);
      if (payload.userId === user.id) {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) return;
          bcrypt.hashSync(password, salt, (hash) => {
            if (err) return;
            User.findOneAndUpdate({ id: userId }, { password: hash })
              .then(() => res.status(202).json('New password is accepted'))
              .catch(() => res.status(500).json(err));
          });
        });
      }
    })

    .catch(() => {
      res.status(404).json('Invalid user');
    });
});

module.exports = {
  router,
};
