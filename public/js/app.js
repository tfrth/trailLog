var app = angular.module('trailApp', ['ngRoute']);

app.config(function($routeProvider,){
	
	$routeProvider

	.when('/', {
		templateUrl: '/templates/home.html',
		controller: 'homeCtrl'
	})
	
	.when('/auth', {
		templateUrl: '/templates/auth.html',
		controller: 'authCtrl'

	})
	.when('/profile', {
		templateUrl: '/templates/profile',
		controller: 'profileCtrl'
		// resolve: {

		// }
	})
	.when('/log', {
		templateUrl: '/templates/log.html',
		controller: 'logCtrl'
		// resolve: {

		// }
	})
	.when('/signup', {
	   	templateUrl: '/templates/signup.html',
	   	conntroller: 'authCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});

	// $locationProvider.html5Mode(true);
});