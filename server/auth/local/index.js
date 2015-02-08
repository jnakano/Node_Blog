'use strict';

var express = require('express');
var passport = require('passport');

var router = express.Router();

router.post('/', function(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    var error = err || info;
    if (error) return res.json(401, error);
    if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});

    res.json(user);
  })(req, res, next)
});

module.exports = router;
