angular.module("MyApp", ['ngRoute', 'RouteControllers']);

angular.module("MyApp").config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true); //Enable href routing without hashes

	$routeProvider.when('/', {
		templateUrl: '/S1_templates/brdHome.html',
		controller: 'HomeController'
	});
});
