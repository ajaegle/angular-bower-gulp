(function () {
  $('div.content').html('<h1>new content</h1>');

  angular.module('aj', []);
  angular.module('aj')
    .controller('MainCtrl', ['$scope', function ($scope) {
      $scope.name = 'ajaegle';
    }]);
})();
