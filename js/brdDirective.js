angular.module('RegDirective',[]).directive('profileTable',function(){
	return{
		restrict:'EA', //A-> attribute or E -> element or EA -> element/attribute
		templateUrl: 'S1_templates/directives/profile-table.html'
	};
});