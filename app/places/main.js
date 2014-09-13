(function () {
  'use strict';

  /* @ngInject */
  function PlacesService ($http) {
  }


  /* @ngInject */
  function PlacesCtrl (PlacesService) {
    this.items = ["a", "b", "c"];
  }

  angular.module('aj')
    .service('PlacesService', PlacesService)
    .controller('PlacesCtrl', PlacesCtrl);

}) ();
