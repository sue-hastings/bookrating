angular.module("app").controller("authController", ["$scope", "$window", "$route", "AuthService", "$localStorage",
  function ($scope, $window, $route, AuthService, $localStorage) {
    $scope.user = AuthService.loggedUser();
    $scope.loggedIn = AuthService.isLoggedIn();

    $scope.login = function() {
      if ($scope.user !== '') {
        AuthService.login($scope.user)
          .then(function(data) {
            $scope.loggedIn = AuthService.isLoggedIn();
            $('.uk-modal-close').click();
            AuthService.isLoggedIn();
          });
      }
    };

    $scope.logout = function() {
      AuthService.logout();
      $scope.loggedIn = AuthService.isLoggedIn();
    };
  }])
.controller("detailsController", ["$scope", "$window", "$route", "$routeParams", "BookService", "$localStorage", "AuthService", "$location",
  function ($scope, $window, $route, $routeParams, $BookService, $localStorage, AuthService, $location) {
    var bookId = $routeParams.id;
    $scope.rootPath = globals.serverUrl;
    $scope.book = {};

    BookService.getBooks()
      .success(function(data) {
        loadBook(data);
      });

    function loadBook(books) {
      for (var i = 0; i < books.length; i++) {
        if (books[i].id == bookId)
          $scope.book = books[i];
      }
    }

    $scope.reviews = [];
    $scope.user = AuthService.loggedUser();
    $scope.loggedIn = AuthService.isLoggedIn();
    $scope.allowReviews = false;
    if (AuthService.isLoggedIn())
      $scope.allowReviews = AuthService.isLoggedIn();

    if (!$localStorage.reviews)
      $localStorage.reviews = $scope.reviews;
    else
      $scope.reviews = $localStorage.reviews;


    $scope.bookreviews = [];
    function loadReviews() {
      $scope.reviews = $localStorage.reviews;
      $scope.bookreviews = [];

      for (var i = $scope.reviews.length - 1; i >= 0; i--) {
        if ($scope.reviews[i].book == $routeParams.id)
          $scope.bookreviews.push($scope.reviews[i]);
      }
    }

    loadReviews();

    $scope.review = {};
    $scope.review.book = $routeParams.id;
    $scope.submit = function() {
      $scope.review.name = AuthService.loggedUser();
      $scope.review.comment = $scope.comment;
      $localStorage.reviews.push($scope.review);
      loadReviews();
    };

    $scope.delete = function(index){
      var review = $scope.bookreviews[index];

      for (var i = 0; i < $localStorage.reviews.length; i++) {
        if ($localStorage.reviews[i].name == review.name) {
          if ($localStorage.reviews[i].book == review.book) {
            $localStorage.reviews.splice(i, 1);
            $scope.allowReviews = true;
          }
        }
      }

      loadReviews();
    };

    $scope.logout = function() {
      AuthService.logout();
      $location.path('home');
    };

    $scope.isOwner = function(obj) {
      if (obj.name == $localStorage.user)
        $scope.allowReviews = false;

      return obj.name == $localStorage.user;
    };
}])
.controller("homeController", ["$scope", "$route", "BookService", "$localStorage", "AuthService",
  function ($scope, $route, BookService, $localStorage, AuthService) {
    $scope.rootPath = globals.serverUrl;
    $scope.books = [];
    $scope.booksResult = [];
    $scope.query = '';
    $scope.searchStatus = "Search";

    BookService.getBooks()
      .success(function(data) {
        $scope.books = data;
        $scope.booksResult = data;
      });

    $scope.vote = function(id, type) {
      BookService.rate(id, type)
        .success(function(data) {
          BookService.getBooks()
          .success(function(data) {
            $scope.books = data;
            $scope.booksResult = data;
          });
        });
    };

    $scope.search = function() {
      $scope.searchStatus = "Searching...";
      $scope.booksResult = [];

      for (var i = 0; i < $scope.books.length; i++) {
        var book = $scope.books[i];
        var q = $scope.query.toLowerCase();

        if (book.title.toLowerCase().indexOf(q) != -1)
          $scope.booksResult.push(book);
      }

      $scope.searchStatus = "Search";
    };

    $scope.user = AuthService.loggedUser();
    $scope.loggedIn = AuthService.isLoggedIn();
}]);
