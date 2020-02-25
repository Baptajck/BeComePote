const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_LOGIN,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const getPasswordResetURL = (user, token) => `http://localhost:3000/password/reset/${user.id}/${token}`;

const resetPasswordTemplate = (user) => {
  const from = process.env.EMAIL_LOGIN;
  const to = user.email;
  const subject = 'BeComePote - Changement de mot de passe';
  const html = `
  <p>Hey ${user.pseudo},</p>
  <p>We heard that you lost your Backwoods password. Sorry about that!</p>
  <p>But don’t worry! You can use the following link to reset your password:</p>
  <p>If you don’t use this link within 1 hour, it will expire.</p>
  <p>Do something outside today! </p>
  <p>–BeComePote-</p>
  `;

  return {
    from, to, subject, html,
  };
};


module.exports = {
  transporter,
  getPasswordResetURL,
  resetPasswordTemplate,
};
