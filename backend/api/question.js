const express = require('express');

const router = express.Router();
const Questions = require('../Models/Questions');

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


module.exports = {
  router,
};
