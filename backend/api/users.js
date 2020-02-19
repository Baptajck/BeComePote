const express = require('express');

const router = express.Router();

const User = require('../Models/Users');

router.get('/users', (req, res) => {
  User.query()
    .then((users) => {
      res.json(users);
    });
});

router.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  User.query()
    .where('id', id)
    .eager('messages')
    .then((user) => {
      res.json(user);
    });
});

module.exports = {
  router,
};
