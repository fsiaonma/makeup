define([
	'modules/makeup',
	'angular-route',
	'modules/user/user',
	'modules/work/work'
], function (makeup, $routeProvider) {
	makeup.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/user', {
				controller: 'UserController',
				templateUrl: "views/user/user.html"
			})
			.when('/work', {
				controller: 'UserController',
				templateUrl: "views/user/user.html"
			})
			.otherwise({
				redirectTo: '/user'
			})
	}]);
});