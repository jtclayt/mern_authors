const ExampleController = require('../controllers/example.controllers');

const ExampleRoutes = app => {
  app.get('/', ExampleController.index);
  app.get('/examples', ExampleController.allExamples);
}

module.exports = ExampleRoutes;
