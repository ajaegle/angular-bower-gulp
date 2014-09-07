(function () {
  $('div.content').html('<h1>new content</h1>');

  angular.module('aj', ['restangular']);
  angular.module('aj')
    .controller('MainCtrl', ['$scope', 'Restangular',
      function ($scope, Restangular) {
        $scope.name = 'ajaegle';
        $scope.user = {};

        var User = Restangular.allUrl('users', 'https://api.github.com/users');
        $scope.fetchUser = function (name) {
          User.one(name).get().then(
            function (data) {
              $scope.user = data;
            },
            function (err) {
              $scope.err = err;
            }
          );
        };
        $scope.fetchUser($scope.name);
      }]);
})();
