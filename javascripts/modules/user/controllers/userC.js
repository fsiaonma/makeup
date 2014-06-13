define([
	'common/config',
	'modules/makeup',
	'../services/userS'
], function(config, makeup) {
	makeup.controller('UserController', function ($rootScope, $scope, userService) {
		$scope.username = null;
		$scope.password = null;

		$scope.regiester = function() {
			userService.regiester($scope.username, $scope.password);
		}
	});
});