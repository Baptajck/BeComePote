const { Model } = require('objection');
const knex = require('../connexion');
// const Users = require('./Users');

// Database connection
Model.knex(knex);

class HasMessages extends Model {
  static get tableName() {
    return 'has_message';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        user_id: {
          type: 'integer',
        },
        chat_message_id: {
          type: 'integer',
        },
      },
    };
  }
}

module.exports = HasMessages;
