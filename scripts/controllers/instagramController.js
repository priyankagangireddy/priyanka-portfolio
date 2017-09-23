/**
 * Created by Sekhar on 22/09/2017.
 */
angular.module('portfolio').controller('instagramController', ['$http','commonConstants','$rootScope', function ($http, commonConstants, $rootScope) {
    var vm = this;

    function init() {
        var params = {};
        params.pageTitle = commonConstants.instagramConstants.pageTitle;
        params.pageIcon = commonConstants.instagramConstants.pageIcon;
        $rootScope.$broadcast(commonConstants.events.pageTitleEvent, params);

        $http.get('https://api.instagram.com/v1/users/search?q=priyanka.gangireddy&client_id=[CLIENT ID]')
    }

    init();

}]);
