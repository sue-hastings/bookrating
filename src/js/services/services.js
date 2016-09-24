angular.module("app")
.factory('auth', function ($localStorage, $http) {
  return {
    login: function(data) {
      var backendUrl = "http://localhost:1337";
      return $http.post(backendUrl, data);
      // $localStorage.user = name;
    },
    logout: function() {
      $localStorage.user = '';
    },
    loggedUser: function() {
      return $localStorage.user;
    },
    isLoggedIn: function() {
      return ($localStorage.user && $localStorage.user !== '');
    }
  };
})
.factory('BookService', function($http) {
  return {
    getBooks: function() {
      var backendUrl = 'http://localhost:1337';
      return $http.get(backendUrl + '/books');
    },
    create: function(data) {
      var backendUrl = 'localhost:3000';
      return $http.get(backendUrl + '/books', data);
    },
    rate: function(id, type) {
      var backendUrl = 'http://localhost:1337';
      return $http.post(backendUrl + '/books/' + id + '/rate',{
        ratingType: type
      });
    }
  };
});
