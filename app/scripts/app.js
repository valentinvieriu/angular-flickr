'use strict';

angular.module('angularFlickrApp', [
  'ngRoute',
  'FlickrAPI',
  'ui.bootstrap'
])
  .config(function ($routeProvider, FlickrProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:photoset_title/:photoset_id', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    FlickrProvider.setApiKey('1dee747a9a6ebfdaf9e85f8315e22771');
    FlickrProvider.setUserId('68069990@N00');

    
  })
  .run(function($rootScope) {
    $rootScope.photosets = [];
  });
