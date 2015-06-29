;(function (){

  'use strict';

  angular.module('tonemap')

  .controller('Main', ['$scope', '$http', 'PARSE', '$location', function($scope, $http, PARSE, $location) {

    // board constructor
    var Board = function(options) {
      this.URL = options.URL;
    };

    // upload board method
    $scope.uploadBoard = function(x) {
      var board = new Board(x);

      $http.post(PARSE.URL + 'classes/boards/', board, PARSE.CONFIG)
      .success( function() {

        $location.path('/');
        $scope.board = {};

      });
    };
    // // // // //
    // // // // // learning drag
    // // // // //

      $scope.list1 = [];
      $scope.list2 = [];
      $scope.list3 = [];
      $scope.list4 = [];

      $scope.list5 = [
        { 'title': 'Item 1', 'drag': true },
        { 'title': 'Item 2', 'drag': true },
        { 'title': 'Item 3', 'drag': true },
        { 'title': 'Item 4', 'drag': true },
        { 'title': 'Item 5', 'drag': true },
        { 'title': 'Item 6', 'drag': true },
        { 'title': 'Item 7', 'drag': true },
        { 'title': 'Item 8', 'drag': true }
      ];


      // how to limit amount of items in list
      $scope.optionsList1 = {
        accept: function(dragEl) {
          if ($scope.list1.length >= 2) {
            return false;
          } else {
            return true;
          }
        }
      };

  }]);

}());
