var mongoose = require('mongoose');
var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    // your solution here

    var email = req.body.email;
    var content = req.body.content;
    var date = Date.now();

    var messageToAdd = new models.Message({"email":email, "content":content, "created":date});
    messageToAdd.save(checkErrors);

    res.redirect("/");

};

function checkErrors(err){
	if(err){
		console.log(err);
		res.redirect('/');
	}else{
		console.log('no errors!');
	}
}