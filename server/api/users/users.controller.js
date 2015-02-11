var User = require('./users.model')

exports.show = function(req,res){

}

exports.create = function(req,res){
	var current_user = new User(req.body);
	console.log(req.body);
	User.create(current_user, function(err,user){
		if(err) return res.status(422).json(err);

		res.json(user);
	});
}

exports.update = function(req,res){

}