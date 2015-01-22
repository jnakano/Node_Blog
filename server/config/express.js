var express = require('express');
var app = express(); 
var server = require('http').createServer(app);
var config = require('./environment');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



module.exports = function(app){
	app.use(bodyParser.urlencoded({ extended: false }));
	  
	app.use(bodyParser.json())


}