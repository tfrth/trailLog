var app = angular.module('trailApp');

app.controller('profileCtrl', function($scope, profile) {
		$scope.saveProfile = function() {
			$scope.profile = profile;
	}
});