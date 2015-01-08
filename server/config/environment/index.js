
var _ = require('lodash');

var config = {
	env: process.env.NODE_ENV,
	port: process.env.PORT || 8000,
	seedDB: false, 
	mongo:{
		options: {
			db:{
				safe:true
			}
		}
	}

}


module.exports = _.merge(
  config,
  require('./' + process.env.NODE_ENV + '.js') || {}
);