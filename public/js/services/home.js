var app = angular.module('trailApp');

app.service('homeService', function($http, $location){
	this.logout = function() {
		$http({
			method: 'GET',
			url: '/api/logout'
		}).then(function (res) {
			$location.path('/');
			return res
		})
		// alert('working');
	};
});

