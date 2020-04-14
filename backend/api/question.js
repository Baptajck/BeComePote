const express = require('express');

const router = express.Router();
const Questions = require('../Models/Questions');
const Users = require('../Models/Users');

/**
  * ALL_QUESTIONS - Route for accessing all questions and choices with a relation mapping
  * @param {object} req
  * @param {object} res
  * @returns {object} user object
  */
router.get('/allQuestions', (req, res) => {
  Questions.query()
    .withGraphJoined('response')
    .then((question) => {
      res.json(question);
      res.status(200).send('All the questions and choices have been successful listed!');
    })
    .catch((err) => res.status(500).send({
      message:
          err.message || 'An error has occurred while producing the listing.',
    }));
});

/**
  * SELECT RESPONSE - Route for accessing the user's answers in the profil tab
  * @param {object} req
  * @param {object} res
  * @returns {object} user object
  */
router.get('/selectedResponse', (req, res) => {
  const id = Number(req.session.user.id);
  Users.query()
    .withGraphJoined('user', 'choice')
    .select('choice_content')
    .where('users.id', id)
    .then((select) => {
      res.json(select);
      res.status(200).send('All the questions and choices have been successful listed!');
    })
    .catch((err) => res.status(500).send({
      message:
          err.message || 'An error has occurred while producing the listing.',
    }));
});

module.exports = {
  router,
};
