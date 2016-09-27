angular.module("app", [
        'ngCookies',
        'ngStorage',
        'ngSanitize',
        'ngEmoticons',
        'ngMaterial',
        'ngAnimate',
        'ngAria',
        'ui.router'
    ])
    .config(['$stateProvider', '$locationProvider', '$httpProvider', '$urlRouterProvider',
        function($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '../views/home.html',
                    controller: 'homeController'
                })
                .state('details', {
                    url: '/details/:id',
                    templateUrl: '../views/details.html',
                    controller: 'detailsController'
                });
            $httpProvider.interceptors.push('AuthInterceptor');
        }
    ]);

var globals = {};
globals.serverUrl = "/server";
