var myApp = angular.module('sampleProject', ['ui.router']);

myApp.config(function($stateProvider) {
  var listingState = {
    name: 'listing',
    url: '',
    templateUrl: 'templates/listing.html'
  }
  var detailsState = {
    name: 'details',
    url: '/details',
    templateUrl: 'templates/details.html'
  }

  $stateProvider.state(listingState);
  $stateProvider.state(detailsState);
});

myApp.factory('dataservices', function(){
	var data = {};

	data.addProjects = function(list){
		data.projectsList = list;
	};
	
	data.addId = function(id){
		data.id = id;
	};	

	return data;
});

