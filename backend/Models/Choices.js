const { Model } = require('objection');
const knex = require('../connexion');

// Database connection
Model.knex(knex);

class Choices extends Model {
  static get tableName() {
    return 'choices';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        id: {
          type: 'integer',
        },
        choice_content: {
          type: 'text',
        },
        question_id: {
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

module.exports = Choices;


// SELECT choices.choice_content, questions.question_content
// FROM `questions`
// JOIN `choices`
// WHERE choices.question_id = 3
// AND questions.id = 3
