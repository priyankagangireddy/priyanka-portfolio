/**
 * Created by Sekhar on 21/09/2017.
 */
angular.module('portfolio').controller('linkedinController', ['$http','commonConstants','$rootScope', function ($http, commonConstants, $rootScope) {
    var vm = this;

    function init() {
        var params = {};
        params.pageTitle = commonConstants.linkedinConstants.pageTitle;
        params.pageIcon = commonConstants.linkedinConstants.pageIcon;
        $rootScope.$broadcast(commonConstants.events.pageTitleEvent, params);
    }

    init();

}]);
