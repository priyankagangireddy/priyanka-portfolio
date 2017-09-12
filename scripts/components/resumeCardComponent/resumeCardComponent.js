/**
 * Created by Sekhar on 09/09/2017.
 */
angular.module('portfolio').component('resumeCardComponent', {
    bindings: {
        companyData: '='
    },
    templateUrl: 'scripts/components/resumeCardComponent/resumeCardComponent.html',
    controller:[resumeCardController]
});

function resumeCardController() {
    var vm = this;

}