angular.module('portfolio').service('achievementsService', ['$http',function ($http) {
    var self = this;

    self.getJsonDataFromAchievements = function () {
        return $http.get('json/achievements.json');
    };
}]);