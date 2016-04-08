var models = require ('../models');

exports.view = function(req, res) {

	models.Message.find({}).exec(getMessages);

	function getMessages (err, messages){
		if (err)
			console.log (err);
		else{
			var data = {data: messages};
    		res.render("index", data);
		}
	}
}