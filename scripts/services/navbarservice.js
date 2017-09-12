/**
 * Created by Sekhar on 08/09/2017.
 */
angular
    .module('portfolio')
    .service('navbarService',['$http', function ($http) {
    var self = this;

    self.getJsonDataFromNavbar = function () {
      return $http.get('json/navData.json');
    };
}]);