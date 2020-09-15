const Author = require('../models/example.model');

module.exports = {
  allAuthors: (req, res) => {
    Author.find()
      .then(authors => res.json(authors))
      .catch(err => res.status(400).json(err));
  },

  createAuthor: (req, res) => {
    Author.create(req.body)
      .then(newAuthor => res.json(newAuthor))
      .catch(err => res.status(400).json(err));
  },

  checkId: (req, res, next) => {
    Author.findOne({_id: req.params.id})
      .then(author => {
        if (author) {
          req.author = author;
          next();
        }
        res.status(404).json({message: "Author not found"})
      })
  },

  oneAuthor: (req, res) => {
    res.json(req.author)
  },

  updateAuthor: (req, res) => {
    Author.updateOne({_id: req.params.id}, req.body, {new: true})
      .then(updatedAuthor => res.json(updatedAuthor))
      .catch(err => res.status(400).json(err));
  },

  deleteAuthor: (req, res) => {
    Author.remove({_id: req.params.id})
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  }
}
