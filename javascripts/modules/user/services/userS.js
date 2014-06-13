define([
	'modules/makeup',
	'common/config'
], function(makeup, config) {
	makeup.factory('userService', function ($http) {
		return {
			regiester: function(params) {
				$http({
					method: "jsonp",
					url: config.SERVER_URL + 'User/register',
					params: {
						username: "admin",
						password: "123456",
						category_id: "12",
						captcha: "123"
					}
				}).success(function(res) {
					console.log(res);
				}).error(function(err) {
					console.log(err)
				});
			},

			updateInfo: function(params) {
				$http({
					method: "jsonp",
					url: config.SERVER_URL + 'User/updateInfo',
					params: {
						sessionId: "admin",
						email: "123456",
						gender: "12",
						nickname: "123",
						career_year: "3",
						try_fee: "23",
						mobile: "12313",
						qq: "213123",
						wechat: "213123"
					}
				}).success(function(res) {
					console.log(res);
				}).error(function(err) {
					console.log(err)
				});
			},

			login: function(params) {
				$http({
					method: "jsonp",
					url: config.SERVER_URL + 'User/login',
					params: {
						username: "admin",
						password: "123456",
						category_id: "12",
					}
				}).success(function(res) {
					console.log(res);
				}).error(function(err) {
					console.log(err)
				});
			},

			getMyInfo: function(params) {
				$http({
					method: "jsonp",
					url: config.SERVER_URL + '/User/getMyInfo',
					params: {
						sessionId: "qafwwfwqf"
					}
				}).success(function(res) {
					console.log(res);
				}).error(function(err) {
					console.log(err)
				});
			},

			getInfo: function(params) {
				$http({
					method: "jsonp",
					url: config.SERVER_URL + 'User/getInfo',
					params: {
						sessionId: "qafwwfwqf",
						user_id: "12"
					}
				}).success(function(res) {
					console.log(res);
				}).error(function(err) {
					console.log(err)
				});
			},

			getNewList: function(params) {
				$http({
					method: "jsonp",
					url: config.SERVER_URL + 'User/getNewList',
					params: {
						firstId: "2",
						lastId: "12"
					}
				}).success(function(res) {
					console.log(res);
				}).error(function(err) {
					console.log(err)
				});
			},

			getList: function(params) {
				$http({
					method: "jsonp",
					url: config.SERVER_URL + 'User/getList',
					params: {
						page: "2",
						order: "good"
					}
				}).success(function(res) {
					console.log(res);
				}).error(function(err) {
					console.log(err)
				});
			},

			uploadAvatar: function() {
				$("#form1").ajaxForm({
					iframe: true,
					dataType: 'json',
					success: function(obj) {
						console.log("==================");
						console.log(obj);
					},
					error:function(value) {
						console.log("服务器忙，请稍后");
					}
				});
				$('#form1').submit();
			}
			
		}
	});
});