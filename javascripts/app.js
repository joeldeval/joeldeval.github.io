(function() {
    'use strict';
    angular.module('joeldevalApp', ['ngRoute',])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '../index.html',
                    controller: 'MainCtrl',
                })
                .otherwise({
                    redirectTo: '/'
                });
        });

})();
