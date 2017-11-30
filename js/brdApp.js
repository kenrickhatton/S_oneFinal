angular.module('BerawApp', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage','TodoService', 'TodoDirective']);

angular.module('BerawApp').config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true); //Enable href routing without hashes

	$routeProvider.when('/', {
		templateUrl: '/S1_templates/brdHome.html',
		controller: 'HomeController'