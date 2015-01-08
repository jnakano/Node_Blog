
var mongoose = require('mongoose');
var schema = mongoose.schema();
var ObjectId = schema.ObjectId;

var PostSchema = new schema({
	title: {type:String, required: true},
	body: {type:String, required: true},
	createdAt: {type:Date, default: Date.now()}, 
	user: {type: ObjectId, ref:User}
});

module.exports = mongoose.model('Post',PostSchema);
