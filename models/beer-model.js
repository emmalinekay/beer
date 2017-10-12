const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const beerSchema = new Schema({
  name: {
    type: String,
    index: true,
    searchable: true,
   },
  location: { type: String },
  style: {
    type: String,
    index: true,
    searchable: true,
  },
  ibu: { type: Number },
  abv: { type: Number },
  description: { type: String },
  image: { type: String }
});

const BeerModel = mongoose.model('Beer', beerSchema);

module.exports = BeerModel;
