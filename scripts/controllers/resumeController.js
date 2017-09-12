/**
 * Created by Sekhar on 09/09/2017.
 */
angular
    .module('portfolio')
    .controller('resumeController', ['resumeService', '$rootScope', 'commonConstants',
        function (resumeService, $rootScope, commonConstants) {
        var vm = this;

        init();

        function init() {
            getJsonDataFromResume();
            var params ={};
            params.pageTitle = commonConstants.portfolioConstants.pageTitle;
            params.pageIcon = commonConstants.portfolioConstants.pageIcon;
            $rootScope.$broadcast(commonConstants.events.pageTitleEvent, params);
        }

        function getJsonDataFromResume() {
            resumeService.getJsonDataFromResume().then(function (success) {
                console.log(success);
               vm.resumeData = success.data
            }).catch(function (error) {

            });
        }

    }]);