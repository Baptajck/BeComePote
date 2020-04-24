const { Model } = require('objection');
const knex = require('../connexion');
const Choices = require('./Choices');

// Database connection
Model.knex(knex);

class Selected extends Model {
  static get tableName() {
    return 'selected';
  }

  static get relationMappings() {
    return {
      choice: {
        relation: Model.HasManyRelation,
        modelClass: Choices,
        join: {
          from: 'selected.choice_id',
          to: 'choices.id',
        },
      },
      user: {
        relation: Model.ManyToManyRelation,
        modelClass: Choices,
        join: {
          from: 'choices.id',
          through: {
            from: 'selected.choice_id',
            to: 'selected.user_id',
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
        choice_id: {
          type: 'integer',
        },
        user_id: {
          type: 'integer',
        },
      },
    };
  }
}

module.exports = Selected;
