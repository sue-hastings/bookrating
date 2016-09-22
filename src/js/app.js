angular.module("app", [
  'ngRoute',
  'ngCookies', 
  'ngStorage',
  'ngSanitize', 
  'ngEmoticons'
])
.config(['$routeProvider', '$locationProvider', 
  function ($routeProvider, $locationProvider) {
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
}]);

var globals = {};
globals.serverUrl = "/server";