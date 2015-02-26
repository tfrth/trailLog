var app = angular.module('trailApp');

app.controller('logCtrl', function($scope, logService, logs) {
	$scope.logs = logs;
	$scope.username = Log.username;

	$scope.saveLog = function(log) {
		logService.save(log);
	};
	$scope.createLog = function() {
		logService.add({
			title: $scope.newLog
		}).then(function(log) {
			$scope.logs.push(log);
			$scope.newLog = null;
		})
	}
});
