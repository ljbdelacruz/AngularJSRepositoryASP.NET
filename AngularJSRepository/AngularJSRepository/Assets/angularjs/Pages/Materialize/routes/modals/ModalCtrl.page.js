angular.module('modules.Modal')
.controller('ModalCtrl',
            ['$scope', '$http', '$route', '$location',
             function ($scope, $http,$route,$location) {
                 // UI Stuff

                 //modalController
                 $scope.modalController={};
                 $scope.modalController.show1={};
                 $scope.modalController.show2={};

                 $scope.modalController.buttons=[
                    {label:'Confirm', invoke:function(){ $scope.modalController.show1(); alert("Confirm"); }}, 
                    {label:'Cancel', invoke:function(){ $scope.modalController.show1(); }}, 
                 ]
                 //button controller
                 $scope.buttonController={};
                 $scope.buttonController.ButtonPressed=function(option){          
                    switch(option){
                        case 1:
                            $scope.modalController.show1();
                            break;
                        case 2:
                            $scope.modalController.show2();
                            break;
                    }
                 }

                 $scope.constructor = function () {
                 }
                 //interval destroyers
                 $scope.$on('$destroy', function () {
                 });
                 //loads all data and execute the statement inside
                 $scope.$on('$routeChangeSuccess', function () {
                     $http.get("/#/Modal")
                       .success(function (data) {
                           //invoke constructor after loading up the page
                           $scope.constructor();





                       })
                        .error(function (data) {
                            console.log("Error " + data);
                        });
                 });
}]);