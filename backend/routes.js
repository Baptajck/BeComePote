
const model = require('./model.js');

module.exports = (app) => {
  app.get('/', model.getDemoStories);
};
