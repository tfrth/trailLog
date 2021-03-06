var mongoose = require('mongoose');  //different node modules rewquired by this model 
var bcrypt = require('bcrypt');
var q = require('q');
 
var schema = mongoose.Schema({					//establishes the schema with desired 
	username: {type: String, unique: true, required: true},
	password: {type: String, required: true}
	// email: String
});

schema.pre('save', function(next){
	var user = this;
	if(!user.isModified('password')) {
		return next();
	}
	bcrypt.genSalt(10, function(err, salt){
		if (err) {
			return next(err);
		}
		bcrypt.hash(user.password, salt, function(err, hash){
			user.password = hash;
			return next();
		});
	});
});

schema.methods.comparePassword = function(pass) {
	var deferred = q.defer();
	bcrypt.compare(pass, this.password, function(err, isMatch) {
		if (err) {
			deferred.reject(err);
		}
		else {
			deferred.resolve(isMatch);
		}
	});
	return deferred.promise;
};

module.exports = mongoose.model('User', schema);


