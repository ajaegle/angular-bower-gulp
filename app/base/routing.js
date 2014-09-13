(function () {
  'use strict';

  angular.module('aj')
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "home/home.html"
        })
        .state('github', {
          url: "/github",
          templateUrl: "github/github.html"
        })
        .state('elasticsearch', {
          url: "/elasticsearch",
          templateUrl: "elasticsearch/elasticsearch.html"
      });
    });
})();
