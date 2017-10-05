const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const beerSchema = new Schema({
  name: { type: String },
  location: { type: String },
  style: { type: String },
  ibu: { type: Number },
  abv: { type: Number },
  description: { type: String },
  image: { type: String }
});

const BeerModel = mongoose.model('Beer', beerSchema);

module.exports = BeerModel;
