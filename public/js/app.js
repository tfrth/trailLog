var app = angular.module('trailApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/templates/auth.html',
		controller: 'authCtrl'

	})
	.when('/profile', {
		templateUrl: '/templates/profile',
		controller: 'profileCtrl'
		// resolve: {

		// }
	})
	.when('/keen', {
		templateUrl: '/templates/keen.html',
		controller: 'keenCtrl'
		// resolve: {

		// }
	})
	.when('/beenThere', {
		templateUrl: '/templates/beenThere.html',
		controller: 'beenCtrl'
		// resolve: {

		// }
	})
	.when('/signup', {
	   	templateUrl: 'public/templates/signup.html',
	   	conntroller: 'signupCtrl'
	   })
	.when('/peace', {
		templateUrl: '/templates/peace.html',
		controller: 'peaceCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
});