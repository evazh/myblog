'use strict';

/**
 * @ngdoc function
 * @name myblogApp.controller:BlogitemCtrl
 * @description
 * # BlogitemCtrl
 * Controller of the myblogApp
 */
angular.module('myblogApp')
  .controller('BlogitemCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
