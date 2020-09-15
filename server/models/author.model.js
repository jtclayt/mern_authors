const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Error mesage'],
      minlength: [3, 'Error message']
    }
  },
  {timestamps: true}
);

const Author = new mongoose.model('Author', AuthorSchema);
module.exports = Author;
