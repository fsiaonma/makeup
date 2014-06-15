define([
	'common/config',
	'modules/makeup',
	'utils/crop',
	'../services/userS'
], function(config, makeup, crop) {
	makeup.controller('UserController', [
		"$rootScope",
		"$scope",
		"userService",
		function ($rootScope, $scope, userService) {
			$scope.regiester = function() {
				userService.regiester({
					username: $scope.regiest.username, 
					password: $scope.regiest.password,
					categoryId: $scope.regiest.categoryId,
					captcha: $scope.regiest.captcha
				});
			}

			$scope.login = function() {
				userService.login({
					username: $scope.login.username,
					password: $scope.login.password,
					captcha: $scope.login.captcha
				});
			}

			$scope.fileChange = function(evt) {
				crop.loadFile("avatarFile");
			}

			$scope.getResults = function(evt) {
				var data = crop.getResults();
				$('#crop_result').attr('src', data);
			}

			var reset = function() {
				$scope.regiest = {};
				$scope.login = {};
			}

			reset(); 
		}
	]);
});