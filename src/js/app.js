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
  function ($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'src/views/home.html',
        controller: 'homeController'
      })
      .when('/details/:id', {
        templateUrl: 'src/views/details.html',
        controller: 'detailsController'
      });
      $httpProvider.interceptors.push('AuthInterceptor');
}]);

var globals = {};
globals.serverUrl = "/server";
