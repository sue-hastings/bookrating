angular.module("app")
.factory('auth', function ($localStorage, $http) {
  return {
    login: function(name) {
      var backendUrl = "localhost:3000";
      $http.post()
      $localStorage.user = name;
    },
    logout: function() {
      $localStorage.user = '';
    },
    loggedUser: function() {
      return $localStorage.user;
    },
    isLoggedIn: function() {
      return ($localStorage.user && $localStorage.user != '');
    }
  };
})
.factory('book', function($http) {
  return {
    getBooks: function() {
      return $http.get(globals.serverUrl + "/data.json");
    }
  };
})