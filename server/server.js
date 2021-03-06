// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express(); 
var server = require('http').createServer(app);
var config = require('./config/environment');
var mongoose = require('mongoose');

require('./config/express')(app);


server.listen(config.port,config.ip, function(){
  var env = app.get('env');
  if (env === 'development') {
   var hostname = 'http://127.0.0.1:' 
  }
	console.log("Server listening on %s, in %s mode",hostname+config.port,env);
})
//require the environment 

mongoose.connect(config.mongo.uri, config.mongo.options);
//require the config 


require('./routes')(app);

if(config.seedDB) { require('./config/seed'); }
