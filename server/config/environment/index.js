
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


// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  config,
  require('./' + process.env.NODE_ENV + '.js') || {}
);
