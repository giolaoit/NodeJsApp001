/**********************************************************************
 * Users
 *********************************************************************/
 var userCtrl = require('./controllers/user');

 exports.register = function(req, res) {
	userCtrl.register(req, res);
};