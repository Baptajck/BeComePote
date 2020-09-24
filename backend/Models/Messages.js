const { Model } = require('objection');
const knex = require('../connexion');
const Users = require('./Users');
const HasMessages = require('./HasMessages');

// Database connection
Model.knex(knex);

class Messages extends Model {
  static get tableName() {
    return 'chat_message';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.ManyToManyRelation,
        modelClass: Users,
        join: {
          from: 'chat_message.id',
          through: {
            from: 'has_message.chat_message_id',
            to: 'has_message.user_id',
          },
          to: 'users.id',
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        message_content: {
          type: 'text',
        },
        category_id: {
          type: 'integer',
        },
        created_at: {
          type: 'string',
          format: 'date-time',
          formatMinimum: '1970-01-01T00:00:00.000',
        },
        updated_at: {
          type: 'string',
          format: 'date-time',
          formatMinimum: '1970-01-01T00:00:00.000',
        },
      },
    };
  }
}

module.exports = Messages;
