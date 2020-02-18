/* eslint-disable no-console */
const express = require('express');

const db = require('./config.js');

const router = express.Router();
const User = require('./Models/Users.js');


// get all users
router.get('/all', (req, res) => {
  db.User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving users.',
      });
    });
});


// // get a single user by id
// router.get('/find/:id', (req, res) => {
//   User.Users.findAll({
//     where: {
//       id: req.params.id,
//     },
//   }).then((user) => res.send(user));
// });

// // post new todo
// router.post('/new', (req, res) => {
//   db.Todo.create({
//     text: req.body.text,
//   }).then((submitedTodo) => res.send(submitedTodo));
// });

// // delete todo
// router.delete('/delete/:id', (req, res) => {
//   db.Todo.destroy({
//     where: {
//       id: req.params.id,
//     },
//   }).then(() => res.send('success'));
// });

// // edit a todo
// router.put('/edit', (req, res) => {
//   db.Todo.update(
//     {
//       text: req.body.text,
//     },
//     {
//       where: { id: req.body.id },
//     },
//   ).then(() => res.send('success'));
// });

module.exports = router;
