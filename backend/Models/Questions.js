const { Model } = require('objection');
const knex = require('../connexion');
const Choices = require('./Choices');

// Database connection
Model.knex(knex);

class Questions extends Model {
  static get tableName() {
    return 'questions';
  }

  static get relationMappings() {
    return {
      response: {
        relation: Model.HasManyRelation,
        modelClass: Choices,
        join: {
          from: 'questions.id',
          to: 'choices.question_id',
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      title: 'Questions',
      type: 'object',
      required: ['email', 'password'],
      properties: {
        id: {
          type: 'integer',
        },
        question_content: {
          type: 'text',
        },
        question_type: {
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

module.exports = Questions;
