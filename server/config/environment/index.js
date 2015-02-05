
var _ = require('lodash');

var config = {
	env: process.env.NODE_ENV,
	port: process.env.PORT || 8000,
	seedDB: false, 
  root: process.cwd(),
	mongo:{
		options: {
			db:{
				safe:true
			}
		}
	},

  facebook: {
    clientID:     process.env.FACEBOOK_ID || 'id',
    clientSecret: process.env.FACEBOOK_SECRET || 'secret',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/facebook/callback'
  },

  twitter: {
    clientID:     process.env.TWITTER_ID || 'id',
    clientSecret: process.env.TWITTER_SECRET || 'secret',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/twitter/callback'
  },

  google: {
    clientID:     process.env.GOOGLE_ID || 'id',
    clientSecret: process.env.GOOGLE_SECRET || 'secret',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/google/callback'
  }
}


// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  config,
  require('./' + process.env.NODE_ENV + '.js') || {}
);
