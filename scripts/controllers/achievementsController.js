
angular
    .module('portfolio')
    .controller('achievementsController', ['achievementsService','$rootScope','commonConstants',
        function (achievementsService,$rootScope, commonConstants) {
        var vm = this;

        init();

        function init() {
            getJsonDataFromAchievements();

            var params = {};
            params.pageTitle = commonConstants.achievementsConstants.pageTitle;
            params.pageIcon = commonConstants.achievementsConstants.pageIcon;
            $rootScope.$broadcast(commonConstants.events.pageTitleEvent, params);
        }
        function getJsonDataFromAchievements() {
            achievementsService.getJsonDataFromAchievements().then(function (success) {
                vm.achievementsData = success.data;
            }).catch(function (error) {
                console.log(error);
            });
        }

    }]);