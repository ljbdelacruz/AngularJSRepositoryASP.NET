angular.module('modules.Main')
.controller('MainCtrl',
            ['$scope', '$http', '$route', '$location',
             function ($scope, $http,$route,$location) {
                 // UI Stuff
                 //button controller
                 $scope.buttonController={};
                 $scope.buttonController.ButtonPressed=function(){
                    alert("Button Pressed");
                 }
                 $scope.constructor = function () {
                 }
                 //interval destroyers
                 $scope.$on('$destroy', function () {
                 });
                 //loads all data and execute the statement inside
                 $scope.$on('$routeChangeSuccess', function () {
                     $http.get("/#/")
                       .success(function (data) {
                           //invoke constructor after loading up the page
                           $scope.constructor();
                       })
                        .error(function (data) {
                            console.log("Error " + data);
                        });
                 });
}]);