/**
 * Created by Sekhar on 09/09/2017.
 */
angular.module('portfolio').service('homeService', ['$http',function ($http) {
    var self = this;

    self.getJsonForQuotes = function() {
        return $http.get('json/quotes.json');
    };
}]);