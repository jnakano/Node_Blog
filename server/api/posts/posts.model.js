
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
	title: {type:String, required: true},
	body: {type:String, required: true},
	createdAt: {type:Date, default: Date.now()}, 
	user: {type: ObjectId, ref:'User'}
});

module.exports = mongoose.model('Post',PostSchema);
