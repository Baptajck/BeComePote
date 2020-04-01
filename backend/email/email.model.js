/* eslint-disable no-console */
/* eslint-disable camelcase */
const express = require('express');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
// const slugify = require('slugify');

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

// Replaces all characters chosen by another
const replaceAll = (string, search, replace) => string.split(search).join(replace);

// Generation of the Password Reset URL with token and dynamic ID User
const getPasswordResetURL = (user, token) => `http://localhost:8080/newPassword/${user.id}/${replaceAll(token, '.', '-')}`;
// const getPasswordResetURL = (user, token) => `http://localhost:8080/newPassword/${user.id}/${token.replace('.', '-').replace('.', '-')}`;


// Generating a hashedToken to set the timestamp on reset password link valid for an hour
const usePasswordHashToMakeToken = (userId) => {
  // const secret = `${passwordHash}-${created_at}`;
  const token = jwt.sign({ userId }, process.env.SECRET, {
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
        const date = new Date();
        const from = process.env.EMAIL_LOGIN;
        const to = email;
        const subject = 'BeComePote - Changement de mot de passe';
        const html = `
        <!doctype html>
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <title>
              BeComePote - Reset Password
            </title>
            <!--[if !mso]><!-- -->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <!--<![endif]-->
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css">
                #outlook a {
                    padding: 0;
                }
        
                .ReadMsgBody {
                    width: 100%;
                }
        
                .ExternalClass {
                    width: 100%;
                }
        
                .ExternalClass * {
                    line-height: 100%;
                }
        
                body {
                    margin: 0;
                    padding: 0;
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }
        
                table,
                td {
                    border-collapse: collapse;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                }
        
                img {
                    border: 0;
                    height: auto;
                    line-height: 100%;
                    outline: none;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                }
        
                p {
                    display: block;
                    margin: 13px 0;
                }
            </style>
            <!--[if !mso]><!-->
            <style type="text/css">
                @media only screen and (max-width:480px) {
                    @-ms-viewport {
                        width: 320px;
                    }
                    @viewport {
                        width: 320px;
                    }
                }
            </style>
            <!--<![endif]-->
            <!--[if mso]>
                <xml>
                <o:OfficeDocumentSettings>
                  <o:AllowPNG/>
                  <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
            <!--[if lte mso 11]>
                <style type="text/css">
                  .outlook-group-fix { width:100% !important; }
                </style>
                <![endif]-->
        
            <style type="text/css">
                @media only screen and (min-width:480px) {
                    .mj-column-per-100 {
                        width: 100% !important;
                    }
                }
            </style>
        </head>
        
        <body style="background-color:#f5f5f5;">
            <div style="background-color:#f5f5f5;">
                <div style="background:#f9f9f9;background-color:#f9f9f9;Margin:0px auto;max-width:600px;">
        
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="entete" style="background:#f9f9f9;background-color:#f9f9f9;width:100%;">
                        <tbody>
                            <tr>
                                <td style="border-bottom:#f7862f solid 5px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top; background:#f5f5f5">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="background:#292929;background-color:#292929;Margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="entete" style="background:#292929;background-color:#292929;width:100%;">
                        <tbody>
                            <tr>
                                <td style="border:#dddddd solid 1px;border-top:0px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                                    <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:bottom;" width="100%">
                                            <tr>
                                                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                        <tbody>
                                                            <tr>
                                                                <td style="width:120px;">
                                                                    <img height="auto" src="https://i.imgur.com/14R0lia.png" style="border:0;display:block;outline:none;text-decoration:none;width:100%;" width="64" />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:40px;word-break:break-word;">
                                                    <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:38px;font-weight:bold;line-height:1;text-align:center;color:#fff;">
                                                        Oups&nbsp;!
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="font-size:0px;padding:5px 25px;padding-bottom:20px;word-break:break-word;">
                                                    <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:18px;line-height:1.2;text-align:left;color:#fff;">
                                                        Il semblerait ${user[0].pseudo} que vous avez oublié votre mot de passe sur BeComePote.
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="font-size:0px;padding:0px 25px;word-break:break-word;">
                                                    <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:18px;line-height:1.2;text-align:left;color:#fff;">
                                                        Nous allons vous aider à en créer un nouveau. Cette procédure va vous diriger vers une page de BeComePote où vous allez pouvoir définir un nouveau mot de passe pour votre compte.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="font-size:0px;padding:10px 25px;padding-top:50px;padding-bottom:50px;word-break:break-word;">
        
                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="reset" style="border-collapse:separate;line-height:100%;">
                                                        <tr>
                                                            <td align="center" bgcolor="#2191db" role="reset" style="border:none;border-radius:3px;color:#fff;cursor:auto;padding:15px 25px;" valign="middle">
                                                                <a href=${url} style="background:#2191db;color:#fff;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;">
                                                                    Cliquez ici pour créer un nouveau mot de passe
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="font-size:0px;padding:0px 25px;word-break:break-word;">
                                                    <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:18px;line-height:1.2;text-align:center;color:#2ebfc0;">
                                                        Attention, ce lien est actif pour une heure avant d'être périmé.
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                              <td align="center" style="font-size:0px;padding:30px 25px;padding-bottom:30px;word-break:break-word;">
                                                <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:20px;text-align:center;color:#7F8FA4;">
                                                  Si cette demande de nouveau mot de passe ne vient pas de vous, vous pouvez ignorer cet email.
                                                </div>
                                                <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:20px;text-align:center;color:#7F8FA4;">
                                                  Ce courriel vous est envoyé automatiquement, merci de ne pas utiliser la fonction "répondre à  l'expéditeur".
                                                </div>
                                              </td>
                                            </tr>
                                        </table>
                                    </div>
        
                                    <!--[if mso | IE]>
                                </td>
                            </tr>
                          </table>
                        <![endif]-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        
                <!--[if mso | IE]>
                  </td>
                </tr>
              </table>
           
              <table
                 align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
              >
                <tr>
                  <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
              <![endif]-->
        
                <div style="Margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                        <tbody>
                            <tr>
                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                                    <!--[if mso | IE]>
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
         
                <tr>
                    <td
                       style="vertical-align:bottom;width:600px;"
                    >
                  <![endif]-->
                                    <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="footer" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td style="vertical-align:bottom;padding:0;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="footer" width="100%">
                                                            <tr>
                                                                <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                                    <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;font-weight:300;line-height:1.5;text-align:center;color:#292929;">
                                                                      BeComePote - L'app où tu papotes&nbsp;!
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                            <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                                <div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;font-weight:300;line-height:1;text-align:center;color:#292929;">
                                                                  &copy; ${date.getFullYear()} - BeComePote. Tous droits réservés.
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!--[if mso | IE]>
                                  </td>
                              </tr>
                                </table>
                        <![endif]-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </body>
        </html>
        `;
        return {
          from, to, subject, html,
        };
      };
      const token = usePasswordHashToMakeToken(user[0].id);
      // console.log('mail', user[0].id);
      // const test = bcrypt.hashSync(String(user[0].id), 10);
      // console.log('mail Bcrypt', test);
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
router.post('/new_password_reset/:userId/:token', (req, res) => {
  const { token } = req.params;
  const { userIdToken } = req.params;
  const { password } = req.body;
  User.query()
    .where('id', userIdToken)
    .then((user) => {
      const oldToken = replaceAll(token, '-', '.');
      const payload = jwt.decode(oldToken, process.env.SECRET);
      const hash = bcrypt.hashSync(password, 10);
      const t = bcrypt.compareSync(payload.userIdToken, user[0].id);
      console.log(t);
      if (payload.userIdToken === user[0].id) {
        User.query()
          .where(
            'id', userIdToken,
          )
          .patch({
            password: hash,
          })
          .then(() => res.status(202).json('New password is accepted'))
          .catch(() => res.status(500).json());
      }
      else {
        res.status(404).json('L\'id du user n\'est pas le même que celui du token');
      }
    })
    .catch(() => {
      res.status(404).json('Invalid user');
    });
});

module.exports = {
  router,
};
