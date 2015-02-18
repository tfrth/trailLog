var app = angular.module('trailApp', [ngRoute]);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/templates/login.html',
		controller: 'loginCtrl',

	})
	.when('/profile', {
		templateUrl: '/templates/profile'
		controller: 
		resolve: {

		}
	})
	.when('/keen', {
		templateUrl: '/templates/keenOn.html',
		controller: 'keenCtrl',
		resolve: {

		}
	})
	.when('/beenThere', {
		templateUrl: '/templates/beenThere.html',
		controller: 'beenCtrl',
		resolve: {
			
		}
	})
})