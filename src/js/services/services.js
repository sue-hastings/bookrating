angular.module("app")
.factory('AuthService', function ($localStorage, $q, $http) {
  return {
    login: function(data) {
      var deffered = $q.defer(;)
      var backendUrl = "http://localhost:1337";
      $http.post(backendUrl + '/login', data)
        .success(function( response) {
          $localStorage.token = response.token;
          $localStorage.name = response.name;
          deffered.resolve(result);
        })
        .error(function(err) {
          deffered.resolve(err);
        })
        return deffered.promise;
    },
    logout: function() {
      $localStorage.token = '';
      $localStorage.name = '';
    },
    loggedUser: function() {
      return $localStorage.name;
    },
    getToken: function() {
      return $localStorage.token;
    },
    isLoggedIn: function() {
      return ($localStorage.token && $localStorage.token !== '');
    }
  };
})
.factory('AuthInterceptor', function(AuthService) {
  var interceptor = {};
  interceptor.request = function(config) {
    config.headers['Authorization'] = 'Bearer ' + AuthService.getToken()
    return config;
  }
  return interceptor;
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
