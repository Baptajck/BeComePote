const { Model } = require('objection');
const knex = require('../connexion');

Model.knex(knex);

class User extends Model {
  static get tableName() {
    return 'users';
  }
}

module.exports = User;
