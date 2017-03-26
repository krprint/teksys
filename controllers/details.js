myApp.controller('detailsCtrl', function( $scope, $window, $state, $http, $filter, dataservices ){
	$scope.prjDetails = $filter('filter')(dataservices.projectsList, {"id":dataservices.id})[0];
});