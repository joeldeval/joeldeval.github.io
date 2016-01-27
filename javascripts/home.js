(function() {
'use strict';
    angular.module('joeldevalApp')
      .controller('MainCtrl', function ($scope,GithubService) {
        GithubService.getRepos()
        .then(function (repositories) {
                    $scope.repos = repositories;
                });

      });
})();
