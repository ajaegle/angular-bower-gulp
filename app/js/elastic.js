(function () {
  'use strict';

  /* @ngInject */
  function ElasticService ($http) {
    var server = "http://192.168.111.10:9200/";
    var path = "weather/record/_search";

    var query =
      {
        "query": {
          "filtered": {
            "filter": {
              "term": {
                "stationsName": "Karlsruhe"
              }
            }
          }
        }
      };

    this.readData = function (name) {
      var url = server + path;
      return $http.post(url, query);
    };
  }


  /* @ngInject */
  function ElasticCtrl (ElasticService) {
    var vm = this;
    this.read = function () {
      ElasticService.readData().then(
        function (data) {
          vm.result = data;
          vm.error = false;
          console.log(data);
        },
        function (data) {
          vm.result = data;
          vm.error = true;
          console.log(data);
        }
      );
    };
    this.read();
  }

  angular.module('aj')
    .service('ElasticService', ElasticService)
    .controller('ElasticCtrl', ElasticCtrl);

}) ();
