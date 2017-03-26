myApp.controller('listingCtrl', function( $scope, $window, $state, $http, dataservices ){
	$scope.projectsList = [];
	
	$http.get('stubs/projects.json').success(function(data) {
		if(data.listing !== undefined && data.listing.length > 0){
			$scope.projectsList = data.listing;
			dataservices.addProjects(data.listing);
		}
	});
	
	$scope.getDetailsPage = function(id){
		dataservices.addId(id);
		$state.go("details");
	}
});