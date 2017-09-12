/**
 * Created by Sekhar on 09/09/2017.
 */
angular.module('portfolio').service('skillsService', ['$http',function ($http) {
    var self =this;

    self.getJsonDataFromSkills = function () {
      return $http.get('json/skills.json');
    };
}]);