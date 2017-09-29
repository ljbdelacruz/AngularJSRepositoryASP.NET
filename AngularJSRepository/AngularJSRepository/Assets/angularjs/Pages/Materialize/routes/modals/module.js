angular.module('modules.Modal', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/Modal', {
                 templateUrl: '/Assets/angularjs/Pages/Materialize/routes/modals/modal.page.html',
                 controller: 'ModalCtrl'
             });
         }
]);