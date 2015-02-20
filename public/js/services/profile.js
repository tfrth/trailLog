var app = angular.module('trailApp');

app.service('profileService', function($q, $http){
	this.getProfile = function() {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: '/api/profile'
		}).then(function(response) {
			deferred.resolve(response.data);
		});
		return deferred.promise;
	};
});