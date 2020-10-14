const { Model } = require('objection');
const knex = require('../connexion');

// Database connection
Model.knex(knex);

class Categories extends Model {
  static get tableName() {
    return 'category';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        category_name: {
          type: 'varchar',
        },
      },
    };
  }
}

module.exports = Categories;
