const { Model } = require('objection');
const knex = require('../connexion');

// Database connection
Model.knex(knex);

class Selected extends Model {
  static get tableName() {
    return 'selected';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        choice_id: {
          type: 'text',
        },
        user_id: {
          type: 'integer',
        },
      },
    };
  }
}

module.exports = Selected;
