const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema(
  {
    field1: {
      type: String,
      required: [true, 'Error mesage'],
      minlength: [3, 'Error message'],
      maxlength: [20, 'Error message']
    },
    field2: {
      type: Number,
      min: [1, 'Error message'],
      max: [100, 'Error message']
    }
  },
  {timestamps: true}
);

const Example = new mongoose.model('Example', ExampleSchema);
module.exports = Example;
