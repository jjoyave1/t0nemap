;(function (){

  'use strict';

  angular.module('tonemap', ['ngRoute', 'ngDragDrop'])

  .constant( 'PARSE', {
    URL: 'https://www.parse.com/1/',

    CONFIG: {

      headers: {

        'X-Parse-Application-Id': 'ClSqBeS5XgHcjs0SQxLI93glYaPJF8vZ4S7yYTcS',
        'X-Parse-REST-API-Key': 'SqenmKPHgXWZSGLjXwtume4bUJjuHt1G8Z1lGLOr'

      }

    }

  })

  .config( [ '$routeProvider',
    function ($routeProvider) {

      $routeProvider.when('/', {

        controller: 'Main',
        templateUrl: 'js/views/main.tpl.html'

      });

  }]);

}());
