var mongoose = require('mongoose');

var Schema = mongoose.Schema; 
var ObjectId = Schema.ObjectId; 

var UserSchema = new Schema({
	name: String,
	email: String,
	pass: String,
	createdAt: {type:Date, default: Date.now()}, 
	post: {type:ObjectId, ref: 'Post'}
});

module.exports = mongoose.model('User', UserSchema);
