/**
 * Created by Sekhar on 21/09/2017.
 */
angular.module('portfolio').controller('githubController', ['$http','commonConstants','$rootScope', function ($http, commonConstants, $rootScope) {
  var vm = this;

  function init() {
      var params = {};
      params.pageTitle = commonConstants.githubConstants.pageTitle;
      params.pageIcon = commonConstants.githubConstants.pageIcon;
      $rootScope.$broadcast(commonConstants.events.pageTitleEvent, params);
      $http.get('https://api.github.com/users/priyankagangireddy').then(function (success) {
          console.log(success);
          vm.githubData = success.data;
          getReposDetailsOfGithub(success.data.repos_url);
      }).catch(function (error) {
          console.log(error);
      });
  }

  init();

  function getReposDetailsOfGithub(reposUrl) {
      $http.get(reposUrl).then(function (success) {
         vm.reposData = success.data;
      }).catch(function (error) {
          console.log(error)
      });
  }
}]);
