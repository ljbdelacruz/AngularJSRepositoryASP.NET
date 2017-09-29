'use strict';

/* Create module for navbar directive */
angular.module('directives.modal1', [])
    .directive('modal1', ['$http',
        '$location',
        function($http, $location) {
            function preFn(scope, element, attr) {
            }
            /* Do the directive's logic here */
            function postFn(scope, element, attr) {
                scope.isShow=true;
                scope.show=function(){
                    scope.isShow=!scope.isShow;
                }
            }
            return {
                restrict: 'E',
                transclude:true,
                scope: {
                    title: '=',
                    show: '=',
                    buttons:'='
                },
                replace: true,
                templateUrl: 'Assets/angularjs/Components/Modal/Modal1/Modal1.html',
                compile: function(scope, element, attr) {
                    return {
                        pre: preFn,
                        post: postFn
                    }
                }
            };
        }
    ]);