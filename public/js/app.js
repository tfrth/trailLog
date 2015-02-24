var app = angular.module('trailApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	
	$routeProvider

	.when('/', {
		templateUrl: '/templates/auth.html',
		controller: 'authCtrl'
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
	   	controller: 'authCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
});