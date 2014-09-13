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
          templateUrl: "github/github.html",
          controller: "GithubCtrl as github"
        })
        .state('elasticsearch', {
          url: "/elasticsearch",
          templateUrl: "elasticsearch/elasticsearch.html",
          controller: "ElasticCtrl as es"
        });
    });
})();
