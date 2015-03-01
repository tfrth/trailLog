var app = angular.module('trailApp');

app.controller('authCtrl', function($scope, $location, authService) {
	$scope.clickLogin = function() {
		authService.login($scope.username, $scope.password).then(function() {
			$location.path('/log');
		}).catch(function(err) {
			// alert('Incorrect username or password!');
			$scope.message = "Oops! Incorrect username or password.";
		})
	};
	$scope.clickRegister = function() {
		authService.register($scope.username, $scope.password).then(function() {
			// $location.path('/log');
			$scope.message = "Signup successful, please login!";
		}).catch(function(err) {
			// alert('Error signing up');
			$scope.message = "error";
		})
	};
	// $scope.clickLogout = function() {
	// 	autheService.
	// }

});
	