'use strict';

/**
 * @ngdoc function
 * @name myblogApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the myblogApp
 */
angular.module('myblogApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.blogs = [
      {id:"1", create_at:"2015-02-13", comments:[{user:'abc',content:'xxxx'}],tags:"angualrjs",title:"第一篇文章", img:"../images/main/1.jpg",content:"第一篇<u>文章第一篇</u>文章第一篇文章"},
      {id:"2", create_at:"2015-04-13", comments:[],tags:"html5",title:"第二篇文章", img:"../images/main/2.jpg", content:"第二篇文章"}
      ];

      $scope.addBlog = function(){
        console.log("abc")
        console.log($scope.title+'.......');
        var blog={title: $scope.title, content:$scope.content, id:'1', create_at:'2015-4-16',comments:[],img:"../images/main/3.jpg"};
      $scope.blogs.push(blog);
      $scope.title='';
      $scope.content='';
      blog='';
      }
  });
