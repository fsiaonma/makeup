define([
	'modules/makeup',
	'angular-route',
	'modules/user/user'
], function (makeup, $routeProvider) {
	makeup.config(function($routeProvider) {
		$routeProvider.
			when('/user', {
				controller: 'UserController',
				templateUrl: "views/user/user.html"
			}).
			otherwise({
				redirectTo: '/user'
			})
	});
});