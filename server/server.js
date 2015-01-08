// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express(); 
var server = require('http').createServer(app);
var config = require('./config/environment');
var mongoose = require('mongoose');


server.listen(config.port,config.ip, function(){
	console.log("Express listening on %d, in %s mode'", config.port, app.get('env'));
})
//require the environment 

mongoose.connect(config.mongo.uri, config.mongo.options);
//require the config 


require('./route')(app);
