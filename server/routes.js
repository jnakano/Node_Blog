/**
* Main application routes
*/

'use strict';

var errors = require('./components/errors');


module.exports = function(app){
    app.all('/*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
      next();
    });
  
  app.use('/posts', require('./api/posts'));
  app.use('/users', require('./api/users'));
  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
  .get(function(req, res) {
    res.sendFile('index.html', { root: app.get('appPath') });
  });

}
