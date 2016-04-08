var mongoose = require('mongoose');

var messageSchema = mongoose.Schema( {
	"email"   : {type: String},
	"content" : {type: String},
	"created" : {type: Date},
});

exports.Message = mongoose.model('Message', messageSchema);