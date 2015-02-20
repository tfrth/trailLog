var app = angular.module('trailApp');

app.controller('signupCtrl', function($scope, $location, signupService){
	$scope.clickRegister = function() {
		signupService.register($scope.username, $scope.password).then(function() {
			$location.path('/keen');
		})
	};
}); 