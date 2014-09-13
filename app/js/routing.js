(function () {
  'use strict';

  angular.module('aj')
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "partials/home.html"
        })
        .state('github', {
          url: "/github",
          templateUrl: "partials/github.html"
        })
        .state('elasticsearch', {
          url: "/elasticsearch",
          templateUrl: "partials/elasticsearch.html"
      });
    });
})();
