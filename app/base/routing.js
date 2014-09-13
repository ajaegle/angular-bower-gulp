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
        })
        .state('places', {
          url: "/places",
          templateUrl: "places/main.html",
          controller: "PlacesCtrl as places",
          abstract: true
        })
        .state('places.view', {
          url: "/",
          templateUrl: "places/view.html"
        })
        .state('places.add', {
          url: "/add",
          templateUrl: "places/form.html"
        });
    });
})();
