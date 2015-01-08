var express = require('express');
var app = express(); 
var server = require('http').createServer(app);
var config = require('./config/environment');

server.listen(config.port,config.ip, function(){
	console.log("Express listening on %d, in %s mode'", config.port, app.get('env'));
})
//require the environment 

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
mongoose.connect(config.mongo.uri, config.mongo.options);
//require the config 


require('./route')(app);