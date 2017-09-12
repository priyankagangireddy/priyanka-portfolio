/**
 * Created by Sekhar on 09/09/2017.
 */
angular
    .module('portfolio')
    .service('resumeService', ['$http',function ($http) {

    var self = this;

    self.getJsonDataFromResume = function () {
       return $http.get('json/resume.json');
    };

}]);