var app = angular.module('trailApp');

app.controller('homeCtrl', function($scope, homeService){
	$scope.clickLogout = function() {
		
		// alert('working');

		homeService.logout();

	}
});

