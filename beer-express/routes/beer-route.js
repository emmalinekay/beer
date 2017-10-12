const express = require('express');

const BeerModel = require('../models/beer-model');
const UserModel = require('../models/user-model');


const router = express.Router();


router.post('/preferences', (req, res, next) => {
  console.log(req.user);
    if (!req.user) {
        res.status(401).json({ errorMessage: 'Not logged in. 🥊' });
        return;
    }
      // req.user.preferences.push(
      //   req.body.preferences );

      //loop through preferences
      //push every individual style into prefeerences array
      req.body.preferences.forEach((oneStyle) => {
        req.user.preferences.push(oneStyle);
      });

      console.log(req.user.preferences);

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

router.get('/beers', (req, res, next) => {
    BeerModel.find({style: req.user.preferences})
      // .limit(20)
      // .sort({ _id: -1 })
      .exec((err, recentBeers) => {
          if (err) {
              console.log('Error finding beers', err);
              res.status(500).json({ errorMessage: 'Finding beer went wrong' });
              return;
          }
          res.status(200).json(recentBeers);
      });
});

router.get('/beers/:beerId', (req, res, next) => {
    BeerModel.findById(
      req.params.beerId,
      (err, beerFromDb) => {
          if (err) {
              console.log('Beer details ERROR', err);
              res.status(500).json({ errorMessage: 'Something went wrong' });
              return;
          }

          res.status(200).json(beerFromDb);
      }
    );
});

router.post('/beers', (req, res, next) => {
    if (!req.user) {
        res.status(401).json({ errorMessage: 'Not logged in.' });
        return;
    }

    const theBeer = new BeerModel({
        name: req.body.beerName,
        location: req.body.beerLocation,
        style: req.body.beerImage,
        ibu: req.body.beerIbu,
        abv: req.body.beerAbv,
        description: req.body.beerDescription,
        image: req.body.beerImage
    });

    theBeer.save((err) => {
        if (theBeer.errors) {
            res.status(400).json({
                errorMessage: 'Validation failed 🤢',
                validationErrors: theBeer.errors
            });
            return;
        }

        if (err) {
            console.log('Error posting beer', err);
            res.status(500).json({ errorMessage: 'Something went wrong' });
            return;
        }

        res.status(200).json(theBeer);
    });
});


module.exports = router;
