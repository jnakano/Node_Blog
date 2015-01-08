module.exports = function(app){
	app.use('/posts', require('./api/posts'));
	app.use('/users', require('./api/users'));
}
