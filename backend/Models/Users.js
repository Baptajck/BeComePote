const { Model } = require('objection');
const knex = require('../connexion');

// Database connection
Model.knex(knex);

class User extends Model {
  static get tableName() {
    return 'users';
  }

  // TODO ADD PROPERTIES TO USER
  // static get jsonSchema() {
  //   return {
  //     type: 'object',
  //     required: ['email', 'password'],

  //     properties: {
  //       email: { type: 'string', minLength: 1, maxLength: 255 },
  //       password: { type: 'string', minLength: 1, maxLength: 255 },
  //     },
  //   };
  // }
}

module.exports = User;
