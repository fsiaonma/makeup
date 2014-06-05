define([
	'common/config',
	'modules/makeup',
	'../services/userS'
], function(config, makeup) {
	makeup.controller('UserController', function ($rootScope, $scope, userService) {		
		$scope.getUser = function() {
			userService.getUser();
		}
	});
});