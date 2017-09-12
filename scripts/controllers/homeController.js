/**
 * Created by Sekhar on 09/09/2017.
 */
angular
    .module('portfolio')
    .controller('homeController', ['$rootScope','commonConstants', 'homeService',
        function ($rootScope, commonConstants, homeService) {
        var vm = this;

        init();

        function init() {
            var params = {};
            params.pageTitle = commonConstants.homeConstants.pageTitle;
            params.pageIcon = commonConstants.homeConstants.pageIcon;
            $rootScope.$broadcast(commonConstants.events.pageTitleEvent, params);

            getQuotesFromJson();
        }

        function getQuotesFromJson() {
            homeService.getJsonForQuotes().then(function (success) {
                vm.quotes = success.data.quotes;
            }).catch(function (error) {

            });
        }
    }]);