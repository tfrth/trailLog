var app = angular.module('trailApp');

app.controller('authCtrl', function($scope, $location, authService) {
	$scope.clickLogin = function() {
		authService.login($scope.username, $scope.password).then(function() {
			$location.path('/keen');
		})
	};
	// $scope.clickRegister = function() {
	// 	authService.register($scope.username, $scope.password).then(function() {
	// 		$location.path('/keen');
	// 	})
	// };

});
	