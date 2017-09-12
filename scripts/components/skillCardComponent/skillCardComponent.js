/**
 * Created by Sekhar on 09/09/2017.
 */
angular.module('portfolio').component('skillCardComponent',{
   bindings: {
    skillItem: '='
   },
    templateUrl: "scripts/components/skillCardComponent/skillCardComponent.html",
    controller:['$sce',skillCardController]
});

function skillCardController($sce) {
    var vm = this;

    vm.getIcon = function (element) {
       return $sce.trustAsHtml(element);
    };
}