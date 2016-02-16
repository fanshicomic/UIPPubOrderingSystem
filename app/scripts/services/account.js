'use strict';

angular.module('pubOSApp')
	.service('AccountSvc', [function() {
		var AccountSvc = {};

		AccountSvc.user = {};

		AccountSvc.signIn = function(username, password) {
			AccountSvc.user.name = username;
		};

		AccountSvc.getUser = function() {
			return AccountSvc.user;
		};

		return AccountSvc;
	}]);