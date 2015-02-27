var Log = require('../models/logModel');

module.exports = {
	list: function(req, res) {
		Log.find({ user: req.user._id }).exec().then(function(logs) {
			return res.json(logs);
		});
	},
	create: function(req, res) {
		var newLog = new Log(req.body);
		newLog.user = req.user._id;
		newLog.save(function(err, log) {
			if (err) {
				return res.status(500).end();
			}
			return res.json(log);
		});
	},
	// update: function(req, res) {
	// 	Log.update({ _id: req.params.id }, req.body).exec(function(err) {
	// 		return res.status(200).end();
	// 	});

	// 	// Todo.findOne({ _id: req.params.id }).exec().then(function(todo) {
	// 	// 	todo.completed = req.body.completed;
	// 	// 	//...
	// 	// 	todo.save(function(err) {
	// 	// 		return res.json(todo);
	// 	// 	});
	// 	// });
	// },
	delete: function(req, res) {
		Log.delete({_id: req.params.id }, req.body).exec(function(err, Log) {
			if (err) {
				return res.status(500).end();
			}
			return res.status(200);
			console.log("delete successful");
		});
	}

};