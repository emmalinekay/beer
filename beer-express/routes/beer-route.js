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

    // UserModel.findById(req.user._id, (err, userFromDb)=>{
    //   if (err){
    //     console.log('Phone details ERROR', err);
    //     res.status(500).json({ errorMessage: 'Phone details went wrong 💩' });
    //     return;
    //   }

      req.user.preferences.push(
        req.body.preferences );

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

      // });
    });
});


module.exports = router;
