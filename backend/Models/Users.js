const { Model } = require('objection');
const knex = require('../connexion');

// Database connection
Model.knex(knex);

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        id: {
          type: 'integer',
        },
        firstname: {
          type: 'string',
        },
        lastname: {
          type: 'string',
        },
        pseudo: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
        },
        email: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
        },
        password: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
          propertyNames: {
            pattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}',
          },
        },
        avatar: {
          type: 'string',
        },
        age: {
          type: 'string',
        },
        presentation: {
          type: 'text',
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

module.exports = User;
