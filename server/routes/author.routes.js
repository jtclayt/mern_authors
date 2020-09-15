const AuthorController = require('../controllers/example.controllers');

const AuthorRoutes = app => {
  app.get('/authors', AuthorController.allAuthors);
  app.post('/authors', AuthorController.createAuthor);
  app.use('/authors/:id', AuthorController.checkId);
  app.get('/authors/:id', AuthorController.oneAuthor);
  app.get('/authors/:id', AuthorController.updateAuthor);
  app.get('/authors/:id', AuthorController.deleteAuthor);
}

module.exports = AuthorRoutes;
