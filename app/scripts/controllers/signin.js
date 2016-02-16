'use strict';

/**
 * @ngdoc function
 * @name pubOSApp.controller:SignInCtrl
 * @description
 * # SignInCtrl
 * Controller of the pubOSApp
 */
angular.module('pubOSApp')
	.controller('SignInCtrl', ['$scope', 'AccountSvc', function($scope, AccountSvc) {
		$scope.signIn = function(username, password) {
			AccountSvc.signIn(username, password);
		};
	}]);
