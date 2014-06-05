define([
	'modules/makeup'
], function(makeup) {
	makeup.factory('userService', function ($http) {
		return {
			getUser: function() {
				console.log("get user");
			}
		}
	});
});