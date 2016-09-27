angular.module("app", [
        'ngRoute',
        'ngCookies',
        'ngStorage',
        'ngSanitize',
        'ngEmoticons',
        'ngMaterial',
        'ngAnimate',
        'ngAria'
    ])
    .config(['$routeProvider', '$locationProvider', '$httpProvider',
        function($routeProvider, $locationProvider, $httpProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $routeProvider
                .when('/', {
                    templateUrl: 'assets/views/home.html',
                    controller: 'homeController'
                })
                .when('/details/:id', {
                    templateUrl: 'assets/views/details.html',
                    controller: 'detailsController'
                });
            $httpProvider.interceptors.push('AuthInterceptor');

        }
    ]);


var globals = {};
globals.serverUrl = "/server";
