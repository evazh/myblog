'use strict';

/**
 * @ngdoc function
 * @name myblogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myblogApp
 */
angular.module('myblogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
