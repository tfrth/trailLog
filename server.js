var express = require('express');
// var session = require('session');     //not sure this is needed
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var session = require('express-session');


var User = require('./api/models/userModel');
var userController = require('./api/controllers/userController');
//require other api controllers here

var mongoUri = "mongodb://localhost:27017/TrailLog";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('connected to DB @ ' + mongoUri);
})

passport.use(new localStrategy({
	usernameField: 'username',
	passwordField: 'password'
}, function(username, password, done) {
	User.findOne({ username: username}).exec().then(function(user) {
		if (!user) {
			return done(null, false);
		}
		user.comparePassword(password).then(function(isMatch) {
			if (!isMatch) {
				return done(null, false);
			}
			return done(null, user);
		});
	});

}));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});


var app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(session({
	secret: '829374298374paranoiduiawhdadcocoon2'
}));
app.use(passport.initialize());
app.use(passport.session());

//mongoose.connect('mongodb://localhost/trailLog'); //method used to connect in myTodos done in class by Cahlan, not sure how it works

app.post('/api/auth', passport.authenticate('local'), function(req, res) {
	return res.status(200).end();
});

app.post('/api/register', function(req, res) {
	var newUser = new User(req.body);
	newUser.save(function(err, user) {
		if (err) {
			return res.status(500).end();
		}
		return res.json(user);
	});
});

var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(400).end();
	}
	return next();
};

app.get('/api/profile', isAuthed, userController.profile);



var port = 8888;

app.listen(port, function(){
	console.log("Listening on port " + port);
});

