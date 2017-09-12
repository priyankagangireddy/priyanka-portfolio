/**
 * Created by Sekhar on 09/09/2017.
 */
angular
    .module('portfolio')
    .controller('blogController', ['$rootScope','commonConstants', function ($rootScope, commonConstants) {
        var vm = this;

        init();

        function init() {
            var params = {};
            params.pageTitle = commonConstants.blogConstants.pageTitle;
            params.pageIcon = commonConstants.blogConstants.pageIcon;
            $rootScope.$broadcast(commonConstants.events.pageTitleEvent, params);
        }

    }]);