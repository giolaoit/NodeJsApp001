exports.register = function(req, res){
	var result = {
		'status':0,
		'message':"Call api register"
	}
	return res.json(result);
};