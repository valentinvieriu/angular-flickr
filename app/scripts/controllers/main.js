'use strict';

angular.module('angularFlickrApp')
  .controller('MainCtrl', function ($scope, $routeParams, Flickr) {
  	var photoset_id = $routeParams.photoset_id || '72157627503614426';
  	
	Flickr.getCollections()
	.then(function(data) {
	  $scope.collections = data.collections;
	});

  	Flickr.getSet(photoset_id)
  		.then(function(data){
  			$scope.photoset = data.photoset;
  		});
  });
