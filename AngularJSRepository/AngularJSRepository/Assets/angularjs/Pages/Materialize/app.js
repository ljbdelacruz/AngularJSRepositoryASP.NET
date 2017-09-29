'use strict';
//this app is for login page
angular.element(document)
    .ready(function () {
        angular.bootstrap(document, ['ngStarterKit']);
    });
angular.module('ngStarterKit', [
            'ngRoute',
            /*Modules*/
            'modules.Main',
            'modules.Modal',
            /*Directives*/
            'directives.button1',
                /**/
                'directives.modal1'
])
.config(['$routeProvider',
                 function ($routeProvider) {
                     $routeProvider.otherwise({ redirectTo: '/' });
                 }
]);