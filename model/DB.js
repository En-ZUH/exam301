const mongoose = require('mongoose');

const dbSchema = mongoose.Schema({
  name: {
    type: 'string',
    unique: true,
    trim: true,
    lowerCase: true
  },
  slug: {
    type: 'string',
    unique: true,
    trim: true,
    lowerCase: true
  },
  gender: 'string',
  img: 'string',
  psiPowers: 'string'
});

const dbModel = mongoose.model('DB', dbSchema);

module.exports = dbModel;
