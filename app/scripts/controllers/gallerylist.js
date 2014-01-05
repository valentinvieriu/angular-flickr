'use strict';

angular.module('angularFlickrApp')
  .controller('GallerylistCtrl', function ($scope, Flickr) {
	Flickr.getCollections()
	.then(function(data) {
	  $scope.collections = data.collections;
	});
  });
