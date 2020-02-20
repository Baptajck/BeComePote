const { Model } = require('objection');
// Import the plugin.
// const unique = require('objection-unique')({
//   fields: ['email'],
//   identifiers: ['id'],
// });

const knex = require('../connexion');

Model.knex(knex);


class User extends Model {
  static get tableName() {
    return 'users';
  }
}

module.exports = User;
