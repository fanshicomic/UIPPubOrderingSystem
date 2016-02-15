'use strict';

angular.module('pubOSApp')
	.controller('NavbarCtrl', ['$scope', 'AccountSvc', function($scope, AccountSvc) {
		$scope.user = AccountSvc.getUser();
	}]);
