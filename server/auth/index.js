'use strict';

var express = require('express');
var passport = require('passport');
var config = require('../config/environment');
var User = require('../api/users/users.model');

// Passport Configuration
require('./local/passport').setup(User, config);

var router = express.Router();

router.use('/register', require('./local'));

module.exports = router;

