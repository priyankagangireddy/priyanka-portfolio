/**
 * Created by Sekhar on 21/09/2017.
 */
/**angular.module('portfolio').controller('githubController', ['$http', function ($http) {
  var vm = this;

  function init() {
      $http.get('https://api.github.com/users/rakeshuvsn').then(function (success) {
          console.log(success);
          vm.image = success.data.avatar_url;
      }).catch(function (error) {
          console.log(error);
      });
  }

  init();
}]);