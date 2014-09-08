(function () {
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
              console.log($scope.user.login);
            },
            function (err) {
              $scope.err = err;
            }
          );
        };
        $scope.fetchUser($scope.name);
      }]);
})();
