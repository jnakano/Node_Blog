var express    = require('express'),
    app        = express(),
    server     = require('http').createServer(app),
    config     = require('./environment'),
    mongoose   = require('mongoose'),
    morgan     = require('morgan'),
    path       = require('path'),
    errorHandler = require('errorhandler');
    bodyParser = require('body-parser');




module.exports = function(app){
  var env = app.get('env');
  
	app.use(bodyParser.urlencoded({ extended: false }));
	  
	app.use(bodyParser.json())

  app.use(morgan('dev'));

  app.set('views', config.root + '/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  if (env === 'development') {
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(config.root, 'public')));
    app.set('appPath', 'public');
    app.use(errorHandler()); // Error handler - has to be last
  }
  
}
