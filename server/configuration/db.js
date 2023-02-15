const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mongo/pinboard', { useNewUrlParser: true }).catch(e => {
  console.error('Connection error', e.message)
});

const db = mongoose.connection;

module.exports = db
