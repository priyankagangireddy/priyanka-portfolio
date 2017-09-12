/**
 * Created by Sekhar on 09/09/2017.
 */
angular.module('portfolio').component('sidebarComponent', {
   bindings: {
   },
    transclude:true,
    templateUrl: 'scripts/components/sidebarComponent/sidebarComponent.html',
    controller:['navbarService','$location','$sce', '$rootScope', 'commonConstants', sidebarController]
});

function sidebarController(navbarService, $location, $sce, $rootScope, commonConstants) {
    var vm = this;

    vm.sidebarOpen = function () {
      vm.isDisplaySidebar = "block";
    };

    vm.sidebarClose = function () {
        vm.isDisplaySidebar = "none";
    };

    vm.goToLocation = function (path) {
        $location.path(path);
    };

    vm.getIcon = function (element) {
        return $sce.trustAsHtml(element);
    };

    $rootScope.$on(commonConstants.events.pageTitleEvent, function (event, params) {
       vm.pageTitle = params.pageTitle;
       vm.icon = $sce.trustAsHtml(params.pageIcon);
    });


    init();

    function init() {
        getJsonDataForNavBar();
    }

    function getJsonDataForNavBar() {
        navbarService.getJsonDataFromNavbar().then(function (success) {
            vm.navData = success.data;
        }).catch(function (error) {

        });
    }
}