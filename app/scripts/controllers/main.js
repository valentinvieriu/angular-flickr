'use strict';

angular.module('angularFlickrApp')
  .controller('MainCtrl', function ($rootScope, $scope, $routeParams, Flickr) {
  	var photoset_id = $routeParams.photoset_id || '72157627503614426';

  	console.log($rootScope.photosets && $rootScope.photosets[photoset_id]);
  	if ($rootScope.photosets && $rootScope.photosets[photoset_id]) {
  		$scope.photoset = $rootScope.photosets[photoset_id];
  	}
  	else {
	  	Flickr.getSet(photoset_id)
	  		.then(function(data){
					$scope.photoset              = data.photoset;
					$rootScope.photosets[photoset_id] = data.photoset;
	  		});
  		
  	}

  });
