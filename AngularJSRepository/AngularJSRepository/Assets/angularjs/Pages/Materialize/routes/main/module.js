angular.module('modules.Main', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/', {
                 templateUrl: '/Assets/angularjs/Pages/Materialize/routes/main/Main.page.html',
                 controller: 'MainCtrl'
             });
         }
]);