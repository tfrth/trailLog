var mongoose = require('mongoose');

var schema = mongoose.Schema({
	state: String,
	area: String,
	activity_type: String,
	notes: String,
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true }


})

module.exports = mongoose.model('Log', schema);