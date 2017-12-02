angular.module("MyApp", ['ngRoute', 'RouteControllers']);

angular.module("MyApp").config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true); //Enable href routing without hashes

	$routeProvider.when('/', {
		templateUrl: '/S1_templates/brdHome.html',
		controller: 'HomeController'
	})
	.when('/FirstStep', {
		templateUrl: '/S1_templates/brdfirststep.html',
		controller: 'FirstController'
	})
	.when('/Suppliers',{
		templateUrl: '/S1_templates/brdSuppliers.html',
		controller: 'SupplierController'
	});
});
