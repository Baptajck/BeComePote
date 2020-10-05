/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
const Messages = require('../Models/Messages');
const Categories = require('../Models/Categories');
const HasMessages = require('../Models/HasMessages');

/**
  * ALL CATEGORIES - Route listing all categories already created
  * @param {object} req
  * @param {object} res
  * @returns {object} user object
  */
router.get('/allCategories', (req, res) => {
  Categories.query()
    .then((category) => {
      res.json(category);
      res.status(200).send('All categories have been successful displayed!');
    })
    .catch((err) => res.status(500).send({
      message:
          err.message || 'Some error has occurred while displaying the categories.',
    }));
});

/**
  * ALL CATEGORIES - Route listing all categories already created
  * @param {object} req
  * @param {object} res
  * @returns {object} user object
  */
router.get('/category/:id', (req, res) => {
  const category_id = req.params.id;
  console.log('>> Category id: ', category_id);
  Categories.query()
    .findById(category_id)
    .then((category) => {
      res.json(category);
      res.status(200).send('The category has been successful displayed!');
    })
    .catch((err) => res.status(500).send({
      message:
          err.message || 'Some error has occurred while displaying the category.',
    }));
});

/**
  * ADD MESSAGE - Route to add a message in the chat database
  * @param {object} req
  * @param {object} res
  * @returns {object} user object
  */
router.post('/addMessage', (req, res) => {
  const { message_content, /* category_id */ } = req.body;
  const userId = Number(req.session.user.id);
  Messages.query()
    .insert({
      message_content,
      // category_id: Number(category_id),
    })
    .then((newMessage) => {
      HasMessages.query()
      .insert({
        user_id: userId,
        chat_message_id: newMessage.id,
      })
      .join('users', 'has_message.user_id', 'users.id')
      .where('user_id', userId)
      .then((test) => {
        res.json(test);
        res.status(200).send('Your message has been successful added!');
      })
      // res.json(newMessage);
      // res.status(200).send('Your message has been successful added!');
    })
    .catch((err) => res.status(500).send({
      message:
          err.message || 'Some error has occurred while adding your message.',
    }));
});

/**
  * GET MESSAGE - List of all message content per nickname and date creation depending on Category (via ID - ID obtained in the Route's ID)
  * @param {object} req
  * @param {object} res
  * @returns {object} user object
  */
router.get('/getMessage/:id', (req, res) => {
  const categoryId = req.params.id;
  Messages.query()
    .withGraphJoined('user')
    .join('has_message', 'chat_message.id', 'has_message.chat_message_id')
    .select('user.pseudo', 'chat_message.message_content', 'chat_message.created_at')
    .where('chat_message.category_id', categoryId)
    .then((test) => {
      res.json(test);
      res.status(200).send('Your message has been successful displayed!');
    })
    .catch((err) => res.status(500).send({
      message:
          err.message || 'Some error has occurred while displaying your message.',
    }));
});

/**
  * GET MESSAGE - List of all message content per nickname and date creation depending on Category (via ID - ID obtained in the Route's ID)
  * @param {object} req
  * @param {object} res
  * @returns {object} user object
  */
router.get('/getMessages', (req, res) => {
  Messages.query()
    .withGraphJoined('user')
    .join('has_message', 'chat_message.id', 'has_message.chat_message_id')
    .select('user.pseudo', 'chat_message.message_content', 'chat_message.created_at')
    .then((test) => {
      res.json(test);
      res.status(200).send('Your message has been successful displayed!');
    })
    .catch((err) => res.status(500).send({
      message:
          err.message || 'Some error has occurred while displaying your message.',
    }));
});

module.exports = {
  router,
};
