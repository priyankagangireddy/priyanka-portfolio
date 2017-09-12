angular
    .module('portfolio')
    .component('navbarComponent', {

        bindings: {
            navItems:'='
        },
        templateUrl: 'scripts/components/navbarComponent/navbarComponent.html',
        controller: ['navbarService','$location',navbarController]
});

function navbarController(navbarService, $location) {

    var vm = this;

    vm.goToItemLocation = function (path) {
        $location.path(path);
    };


    init();

    function init() {
        getJsonDataForNavBar()
    }

    function getJsonDataForNavBar() {
        navbarService.getJsonDataFromNavbar().then(function (success) {
            console.log(success);
            vm.navData = success.data;
        }).catch(function (error) {

        });
    }
}