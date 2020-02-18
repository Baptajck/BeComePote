const Users = require('../Models/Users.js');

// Create and Save a new User
exports.createAccount = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a User
  const user = {
    pseudo: req.body.pseudo,
    email: req.body.email,
    password: req.body.password,
  };

  // Save User in the database
  Users.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the User.',
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const { pseudo } = req.query;

  Users.findAll({ where: pseudo })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving users.',
      });
    });
};

// Find a single User with an id
exports.findOneProfile = (req, res) => {
  const { id } = req.params;

  Users.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || `Error retrieving User with id=${id}`,
      });
    });
};

// Update a User by the id in the request
exports.changeProfileUser = (req, res) => {
  const { id } = req.params;

  Users.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'User was updated successfully.',
        });
      }
      else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || `Error updating User with id=${id}`,
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Users
exports.findAllPublished = (req, res) => {

};
