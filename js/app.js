
var movieApp = angular.module('movieApp', ['ngRoute','ngResource','ngCookies','ngFileUpload']);

movieApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/homepage', {
        templateUrl: 'partials/homepage.html',
        controller: 'homepageCtrl'
      }).
      when('/createAccount', {
        templateUrl: 'partials/createaccount.html',
        controller: 'createaccountCtrl'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
      }).
      when('/oops', {
        templateUrl: 'partials/oops.html',
      }).
      when('/welcome', {
        templateUrl: 'partials/welcome.html',
        controller: 'welcomeCtrl'
      }).
      when('/movieList', {
        templateUrl: 'partials/movieList.html',
        controller: 'movieListCtrl'
      }).
      when('/friends', {
        templateUrl: 'partials/friends.html',
        controller: 'friendsCtrl'
      }).
      when('/movieSearch', {
        templateUrl: 'partials/movieSearch.html',
        controller: 'movieSearchCtrl'
      }).
      when('/editprofile', {
        templateUrl: 'partials/editprofile.html',
        controller: 'editprofileCtrl'
      }).
      when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'profileCtrl'
      }).
      when('/movieInfo/:movieId', {
        templateUrl: 'partials/movieInfo.html',
        controller: 'movieInfoCtrl'
      }).
      when('/header', {
        templateUrl: 'partials/header.html',
        controller: 'headerCtrl'
      }).
      when('/header2', {
        templateUrl: 'partials/header2.html',
        controller: 'header2Ctrl'
      }).
      when('/friendsMovieList/:userName', {
        templateUrl: 'partials/friendsMovieList.html',
        controller: 'friendsMovieListCtrl'
      }).
      otherwise({
        redirectTo: '/homepage'
      });
  }]);
