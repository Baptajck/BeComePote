/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
const Questions = require('../Models/Questions');
const Selected = require('../Models/Selected');
const Choices = require('../Models/Choices');

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
router.post('/addResponses', (req, res) => {
  const userId = Number(req.session.user.id);
  const { testBody1, testBody2, testBody3, testBody4 } = req.body;
  const options = {
    relate: true,
    unrelate: true,
    insertMissing: true,
    update: true,
  };

  const firstChoice = {
    choice_id: testBody1,
    user_id: userId,
  };
  const secondChoice = {
    choice_id: testBody2,
    user_id: userId,
  };
  const thirdChoice = {
    choice_id: testBody3,
    user_id: userId,
  };
  const forthChoice = {
    choice_id: testBody4,
    user_id: userId,
  };

  Selected.query()
    .delete()
    .where('user_id', userId)
    .then((result) => {
      async function addChoice() {
        const firstChoiceInserted = await Selected.query()
          .upsertGraph(firstChoice, options);
        const secondChoiceInserted = await Selected.query()
          .upsertGraph(secondChoice, options);
        const thirdChoiceInserted = await Selected.query()
          .upsertGraph(thirdChoice, options);
        const forthChoiceInserted = await Selected.query()
          .upsertGraph(forthChoice, options);
        return (firstChoiceInserted, secondChoiceInserted, thirdChoiceInserted, forthChoiceInserted);
      }
      res.json({
        result,
        message: 'Your three choices have been saved',
      });
      addChoice();
    })
    .catch((err) => res.status(500).send({
      message:
        err.message || 'An error has occurred while saving your choices.',
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
  Choices.query()
    .withGraphJoined('choice')
    .join('questions', 'choices.question_id', 'questions.id')
    .select('choice_content', 'question_id', 'question_content')
    .where('user_id', id)
    .then((select) => {
      res.json(select);
      res.status(200).send('All the questions and choices have been successful listed!');
    })
    .catch((err) => res.status(500).send({
      message:
          err.message || 'An error has occurred while producing the listing.',
    }));
});

/**
  * SELECT RESPONSE - Route for user with id
  * @param {object} req
  * @param {object} res
  * @returns {object} user object
  */
router.get('/selectedResponseWithId/:id', (req, res) => {
  const userId = Number(req.params.id);
  Choices.query()
    .withGraphJoined('choice')
    .join('questions', 'choices.question_id', 'questions.id')
    .select('choice_content', 'question_id', 'question_content')
    .where('user_id', userId)
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


// Selected.query()
//     .withGraphJoined('choice')
//     .where('selected.user_id', id)
//     .join('questions')
//      .select('choice_content', 'question_id', 'question_content', 'questions.id')
//     .then((select) => {
//       res.json(select);
//       res.status(200).send('All the questions and choices have been successful listed!');
//     })
//     .catch((err) => res.status(500).send({
//       message:
//           err.message || 'An error has occurred while producing the listing.',
//     }));


// router.post('/addResponses', (req, res) => {
//   const userId = Number(req.session.user.id);
//   const { testBody } = req.body;

//   Selected.query()
//     .delete()
//     .where('user_id', userId)
//     .then(() => {
//       testBody.forEach((element) => {
//         Selected.query()
//           .upsertGraph({
//             choice_id: +element, // "+" confirms Interger format
//             user_id: userId,
//           })
//           .then((result) => {
//             res.json({ result, message: 'Your choices have been saved' });
//           })
//           .catch((err) => res.status(500).send({
//             message:
//               err.message || 'An error has occurred while saving your choices.',
//           }));
//       });
//     });
// });
