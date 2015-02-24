ar app = angular.module('trailApp');

app.service('logService', function($http){
	this.hikeLog = function() {
		$http({
			method: 'GET',
			url: '/api/'
		
		});
	};
});

