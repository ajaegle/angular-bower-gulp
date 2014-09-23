(function () {
  'use strict';

  /* @ngInject */
  function PlacesService ($http) {
  }

  var places = {
    castle: {
      lat: 49.013604,
      lng: 8.404419
    },
    work: {
      lat: 49.020498,
      lng: 8.437560
    }
  };

  /* @ngInject */
  function PlacesCtrl (Places) {
    var vm = this;
    vm.markers = {};

    vm.center = {
      lat: 49.009356,
      lng: 8.403697,
      zoom: 16
    };

    vm.addMarkers = function() {
      vm.markers.work = Places.work;
      vm.markers.castle = Places.castle;
    };

    vm.removeMarkers = function() {
      vm.markers = {};
    };

    vm.locateMe = function () {
      vm.center.autoDiscover = true;
    };
  }

  angular.module('aj')
    .value('Places', places)
    .service('PlacesService', PlacesService)
    .controller('PlacesCtrl', PlacesCtrl);

}) ();
