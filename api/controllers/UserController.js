/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(){

	},

	delete: function(){

	},

	listOne: function(){

	},

	listAll: function(){

	},

	update: function(){
		
	},

	login: function (req, res) {
	  return res.login({
	    successRedirect: '/'
	  });
	},

	logout: function (req, res) {
	  req.logout();
	  return res.ok('Logged out successfully.');
	}


};

