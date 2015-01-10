'use strict';

var mongoose = require('mongoose');

var PricelistSchema = new mongoose.Schema({
  filename: String,
  active: Boolean,
  price: { type: String, default: 'Д+' },
  note: { type: String, default: '' },
  downloads: Number,
  dl_rate: Number,
  date_uploaded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pricelist', PricelistSchema);