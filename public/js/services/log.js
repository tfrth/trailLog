var app = angular.module('trailApp');

app.service('logService', function($q, $http){
	this.getLog = function() {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: '/api/log'
		}).then(function(response) {
			deferred.resolve(response.data);
		})
		return deferred.promise;
	};
	this.save = function(log) {
		var deferred = $q.defer();
		$http ({
			method: 'PUT',
			url: '/api/log/'+log._id,
			data: log
		}).then(function(response) {
			deferred.resolve(response.data);
		})
		return deferred.promise;
	};
	this.add = function(log) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: 'api/log',
			data: log
		}).then(function(response) {
			deferred.resolve(response.data);
		});
		return deferred.promise;
	}
}); 

