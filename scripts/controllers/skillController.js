
angular
    .module('portfolio')
    .controller('skillsController', ['skillsService','$rootScope','commonConstants',
        function (skillsService, $rootScope, commonConstants) {
        var vm = this;

        init();

        function init() {
            getJasonDataFromSkills();

            var params ={};
            params.pageTitle = commonConstants.skillConstants.pageTitle;
            params.pageIcon = commonConstants.skillConstants.pageIcon;
            $rootScope.$broadcast(commonConstants.events.pageTitleEvent, params);
        }

        function getJasonDataFromSkills() {
            skillsService.getJsonDataFromSkills().then(function (success) {
                vm.skillsData = success.data;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }]);