var app = angular.module('trailApp');

app.service('signupService', function($q, $http) {
	this.register = function(username, password) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/register'
			data: {
				username: username,
				password: password
			}
		}).then(function(response) {
			deferred.resolve(response.data);
		});
		return deferred.promise;
	};
}); 