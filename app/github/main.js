(function () {
  'use strict';

  /* @ngInject */
  function GithubCtrl (Restangular) {
    var vm = this;
    this.name = 'ajaegle';
    this.user = {};

    var User = Restangular.allUrl('users', 'https://api.github.com/users');
    this.fetchUser = function (name) {
      User.one(name).get().then(
        function (data) {
          vm.user = data;
        },
        function (err) {
          vm.err = err;
        }
      );
    };
    this.fetchUser(this.name);
  }

  angular.module('aj')
    .controller('GithubCtrl', GithubCtrl);

}) ();
