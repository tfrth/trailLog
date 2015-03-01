var mongoose = require('mongoose');

var schema = mongoose.Schema({
	title: String,
	state: String,
	area: String,
	activity_type: String,
	notes: String,
	$currentDate: { type: "date"},
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true }

});

module.exports = mongoose.model('Log', schema); 

