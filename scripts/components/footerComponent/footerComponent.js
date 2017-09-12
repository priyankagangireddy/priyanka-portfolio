angular
    .module('portfolio')
    .component('footerComponent',{

        bindings:{},
        templateUrl:'scripts/components/footerComponent/footerComponent.html',
        controller:[footerController]

    });
    function footerController(){
        var vm = this;
    }



