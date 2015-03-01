var app = angular.module('trailApp');

app.controller('logCtrl', function($scope, logService, logs) {
	$scope.logs = logs; //this data pulled in from db in app.js by resolve
	// $scope.username = User.username;
	$scope.createLog = function() {
		logService.add({
			title: $scope.title,
			state: $scope.state,
			area: $scope.area,
			activity_type: $scope.activity_type,
			notes: $scope.notes
		});
		$scope.title = '';
		$scope.state = '';
		$scope.area = '';
		$scope.activity_type = '';
		$scope.notes = '';
		window.location.reload();

	}

	$scope.deleteLog = function() {
			logService.delete({
			title: $scope.title,
			state: $scope.state,
			area: $scope.area,
			activity_type: $scope.activity_type,
			notes: $scope.notes
			})
		}
});


// $scope.createTodo = function() {
// 		TodoService.add({
// 			title: $scope.newTodo
// 		}).then(function(todo) {
// 			$scope.todos.push(todo);
// 			$scope.newTodo = null;
// 		})
// 	}

