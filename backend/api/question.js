const express = require('express');

const router = express.Router();
const Questions = require('../Models/Questions');
// const Users = require('../Models/Users');
const Selected = require('../Models/Selected');

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
  const userId = Number(req.session.user.id);
  const options = {
    relate: true,
    unrelate: true,
    insertMissing: true,
    update: true,
  };

  Selected.query()
    .where('user_id', userId)
    // .select('id')
    .then((t) => {
      // const test = t.id;
      // console.log(test);
      Selected.query()
        .upsertGraph([
          {
            id: 116,
            choice_id: [
              (1),
            ],
            user_id: [
              (userId),
            ],
          },
        ], options)
        .then((p) => {
          res.json({
            p,
            message: 'Je suis P',
          });
        });
    })
    .catch((err) => res.status(500).send({
      message:
        err.message || 'An error has occurred while producing the listing.',
    }));
});
// .then((select) => {
//   res.json({
//     select,
//     message: 'Je suis SELECT',
//   });
//   res.status(200).send('All the questions and choices have been successful listed!');
// })
// .catch((err) => res.status(500).send({
//   message:
//     err.message || 'An error has occurred while producing the listing.',
// }));
// })
// .catch((err) => res.status(500).send({
//   message:
//       err.message || 'An error has occurred while producing the listing.',
// }));
// });

module.exports = {
  router,
};


// router.get('/selectedResponse', (req, res) => {
//   const id = Number(req.session.user.id);
//   Selected.query()
//     .withGraphJoined('choice')
//     .select('question_id')
//     .where('user_id', id)
//     .then((select) => {
//       if (Array.select.isEmpty()) {
//         Selected.query()
//           .insert({

//           });
//       }
//       if (select !== []) {
//         Selected.query()
//           .patch({

//           });
//       }
//       res.json(select);
//       res.status(200).send('All the questions and choices have been successful listed!');
//     })
//     .catch((err) => res.status(500).send({
//       message:
//           err.message || 'An error has occurred while producing the listing.',
//     }));
// });


// Selected.query()
//   .upsertGraph([
//     {
//       choice_id: [
//         (2),
//       ],
//       user_id: [
//         (userId),
//       ],
//     },
//     {
//       choice_id: [
//         (6),
//       ],
//       user_id: [
//         (userId),
//       ],
//     },
//     {
//       choice_id: [
//         (9),
//       ],
//       user_id: [
//         (userId),
//       ],
//     },
//   ], options);
