
var Post = require('./posts.model');
var _ = require('lodash');
var util = require('util');

exports.index = function(req,res){
	//show all posts in the model 
	Post.find({}, function(err,posts){
		console.log(inspector(posts))
		if(err) return res.send(500, err);

		res.status(200).json(posts)
	})
}

exports.create = function(req,res){
	//Get parameter from url and create new model for the post 
	var post = req.body;
	console.log(inspector(post))
	Post.create(post,function(err,post){
		console.log(inspector(post))
		if(err) return res.send(500, err);

		 res.status(201).send("Successfully sent post")
	})

}

exports.update = function(req,res){
//Find by obect ID, and replace. 
	var id = req.params.id; 
	Post.findById(id, function(err,post){
		console.log(inspector(post))
		if(err) return res.send(500, err);

		var updated = _.merge(post, req.body);
		update.save(function(){
			if(err) return res.send(500, err);

			res.status(200).json(post)
		})
		
	})


}

function inspector(obj){
	"use strict"

	return util.inspect(obj, {
		showHidden: true,
		colors: true,
		depth: null
	})
}

