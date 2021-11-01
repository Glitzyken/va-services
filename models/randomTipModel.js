const mongoose = require('mongoose');

const randomTipSchema = new mongoose.Schema({
  topic: String,
  tip: String,
});

const RandomTip = mongoose.model('RandomTip', randomTipSchema);

module.exports = RandomTip;
