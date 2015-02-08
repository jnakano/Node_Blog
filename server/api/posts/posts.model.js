
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
	title: {type:String},
	body: {type:String},
	createdAt: {type:Date, default: Date.now()}, 
	user: {type: ObjectId, ref:'User'}
});

module.exports = mongoose.model('Post',PostSchema);
