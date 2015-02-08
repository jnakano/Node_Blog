var config     = require('./environment'),
    express    = require('express'),
    mongoose   = require('mongoose'),
    morgan     = require('morgan'),
    path       = require('path'),
    cors       = require('cors'),
    cookieParser = require('cookie-parser'),
    compression = require('compression'),
    errorHandler = require('errorhandler'),
    passport = require('passport'),
    bodyParser = require('body-parser');

module.exports = function(app){
  var env = app.get('env');
  
	app.use(bodyParser.urlencoded({ extended: false }));

  app.use(cors());
	  
	app.use(bodyParser.json())

  app.use(cookieParser());

  app.use(compression())

  app.use(passport.initialize());

  app.use(morgan('dev'));

  app.set('views', config.root + '/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  if (env === 'development') {
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(config.root, 'public')));
    app.use(morgan('dev'));
    app.set('appPath', 'public');

    app.use(errorHandler()); // Error handler - has to be last
  }
  
}
