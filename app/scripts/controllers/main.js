'use strict';

angular.module('angularFlickrApp')
  .controller('MainCtrl', function ($rootScope, $scope, $routeParams, Flickr, $modal) {
  	var photoset_id = $routeParams.photoset_id || '72157633160214894';

    $scope.getMaxPicture = function getMaxPicture(obj) {
      var maxUrl = obj.url_k || obj.url_h || obj.url_l || obj.url_z;
      return maxUrl;
    }

    $scope.openImage = function openImage(photo) {
      // var imageUrl = photo.url_k || photo.url_h || photo.url_l || photo.url_z;
      var imageUrl = photo.url_z;
      var modalInscance = $modal.open({
        template:'<img ng-src="'+imageUrl+'" ng-click="closeImage()" class="full-screen-image"/>',
        controller:function($scope, $modalInstance) {
          $scope.closeImage = function(){
            $modalInstance.close();
          }
        }
      });
    };
  	// check if we have the information cacched
  	if ($rootScope.photosets && $rootScope.photosets[photoset_id]) {
  		$scope.photoset = $rootScope.photosets[photoset_id];
  	}
  	else {
	  	Flickr.getSet(photoset_id,'url_q,url_z,url_l,url_h,url_k')
	  		.then(function(data){
					$scope.photoset              = data.photoset;
					$rootScope.photosets[photoset_id] = data.photoset;
	  		});
  		
  	}

  });
