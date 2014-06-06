define([
	'common/config',
	'modules/makeup',
	'../services/workS'
], function(config, makeup) {
	makeup.controller('WorkController', function ($rootScope, $scope, workService) {
		$scope.getWorksList = function() {
			workService.getWorksList();
		};
	});
});