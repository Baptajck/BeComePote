/* eslint-disable no-console */
const fs = require('fs');
const jwt = require('jsonwebtoken');

// const secret = process.env.SECRET;
const publicKEY = fs.readFileSync('key/public.key', 'utf8');


const withAuth = (req, res, next) => {
  const token = req.cookies.userToken;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  }
  else {
    jwt.verify(token, publicKEY, (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
        // console.log(err);
      }
      else {
        req.email = decoded.user[0].email;
        // console.log(req.email);
        next();
      }
    });
  }
};

module.exports = withAuth;
