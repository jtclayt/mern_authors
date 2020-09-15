const Example = require('../models/example.model');

module.exports.index = (req, res) => {
  res.json({message: 'Hello world'});
}

module.exports.allExamples = (req, res) => {
  Example.find()
    .then(examples => res.json({examples: examples}))
    .catch(err => res.json({message: 'Something went wrong', error: err}));
}
