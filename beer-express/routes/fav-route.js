const express = require('express');

const BeerModel = require('../models/beer-model');
const UserModel = require('../models/user-model');


const router = express.Router();


router.post('/favorites', (req, res, next) => {
  //Handles Login
    if (!req.user) {
        res.status(401).json({ errorMessage: 'Not logged in. 🥊' });
        return;
    }

      console.log(req.user);

      req.user.favorites.push(req.body.favorites);

      console.log(req.user);

      req.user.save((err)=>{
        if (req.user.errors) {
            res.status(400).json({
                errorMessage: 'Update validation failed 🤢',
                validationErrors: req.user.errors
            });
            return;
        }
        if (err) {
            console.log('ERROR', err);
            res.status(500).json({ errorMessage: '💩' });
            return;
        }
        res.status(200).json(req.user);
    });
});

router.get('/favorites', (req, res, next) => {
    UserModel.favorites.find()
      .sort({ _id: -1 })
      .exec((err, recentFavs) => {
          if (err) {
              console.log('Error finding favorites', err);
              res.status(500).json({ errorMessage: 'Finding favorites went wrong' });
              return;
          }

          res.status(200).json(recentFavs);
      });
});

module.exports = router;
