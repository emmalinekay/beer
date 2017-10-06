const express = require('express');

const BeerModel = require('../models/beer-model');


const router = express.Router();


// GET beers
router.get('/beers', (req, res, next) => {
    BeerModel.find()
      .exec((err, beers) => {
          if (err) {
              console.log('Error finding beers', err);
              res.status(500).json({ errorMessage: 'Something got messed up' });
              return;
          }

          res.status(200).json(beers);
      });
});

module.exports = router;
