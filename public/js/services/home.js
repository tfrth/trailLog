var app = angular.module('trailApp');

app.service('homeService', function($http){
	this.logout = function() {
		$http({
			method: 'GET',
			url: '/api/logout'
		
		});
	};
});

