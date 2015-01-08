var mongoose = require('mongoose');

var schema = mongoose.schema(); 
var ObjectId = schema.ObjectId; 

var UserSchema = new schema({
	name: String,
	email: String,
	pass: String,
	createdAt: {type:Date, default: Date.now()}, 
	post: {type:ObjectId, ref: 'Post'}
})