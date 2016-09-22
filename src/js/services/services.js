angular.module("app")
.factory('auth', function ($localStorage) {
  return {
    login: function(name) {
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