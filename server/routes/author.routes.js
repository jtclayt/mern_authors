const AuthorController = require('../controllers/author.controllers');

const AuthorRoutes = app => {
  app.get('/api/authors', AuthorController.allAuthors);
  app.post('/api/authors', AuthorController.createAuthor);
  app.use('/api/authors/:id', AuthorController.checkId);
  app.get('/api/authors/:id', AuthorController.oneAuthor);
  app.get('/api/authors/:id', AuthorController.updateAuthor);
  app.get('/api/authors/:id', AuthorController.deleteAuthor);
}

module.exports = AuthorRoutes;
