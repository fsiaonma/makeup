define([
	'common/config',
	'modules/makeup',
	'../services/workS'
], function(config, makeup) {
	makeup.controller('WorkController', [
		"$rootScope", 
		"$scope", 
		"workService",
		function ($rootScope, $scope, workService) {
			$scope.getWorksList = function() {
				workService.getWorksList();
			};
		}
	]);
});