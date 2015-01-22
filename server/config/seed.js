var Post = require('../api/posts/posts.model');

Post.find({}).remove(function(){
	Post.create({
		title:'Sample',
		body:'Hello World',
		createdAt: Date.now()
	})
})