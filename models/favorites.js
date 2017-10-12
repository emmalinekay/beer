const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  favorites: {type: Array}
});

const FavoriteModel = mongoose.model('Favorite', beerSchema);

module.exports = FavoriteModel;
