var express = require('express');
var session = require('session');
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/trailLog');


















var port = 7777;

app.listen(port, function(){
	console.log("Listening on port " + port);
});

