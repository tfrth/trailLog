var app = angular.module('trailApp', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider){
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
		templateUrl: '/templates/profile.html',
		controller: 'profileCtrl'
		// resolve: {
		// 	profile: function(profileService) {
		// 		return profileService.getProfile();
		// 	}
		// }
	})
	.when('/log', {
		templateUrl: '/templates/log.html',
		controller: 'logCtrl',
		resolve: { 
				logs: function(logService) {
					return logService.getLog();
			}

		}
	})
	.when('/signup', {
	   	templateUrl: '/templates/signup.html',
	   	controller: 'authCtrl'
	})
	.when('/map', {
		templateUrl: '/templates/map.html',
		controller: 'mapCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});

	// $locationProvider.html5Mode(true);
});