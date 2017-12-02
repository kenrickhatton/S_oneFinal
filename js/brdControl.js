angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To Angular Todo!";
    })
    .controller('FirstController', function($scope) {
        $scope.Info = "This is only a guide that we used first";
    })
    .controller('SupplierController', function($scope) {
        $scope.Info = "This is only a guide that we used first";
    })
