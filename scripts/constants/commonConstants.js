/**
 * Created by Sekhar on 09/09/2017.
 */
angular
    .module('portfolio')
    .constant('commonConstants', {
        homeConstants:{
            pageTitle: 'Home',
            pageIcon: "<i class='fa fa-home icon-page' aria-hidden='true'></i>"
        },
        skillConstants:{
            pageTitle: 'My Skills',
            pageIcon: "<i class='fa fa-book icon-page' aria-hidden='true'></i>"
        },
        portfolioConstants: {
            pageTitle: 'My portfolio',
            pageIcon: "<i class='fa fa-suitcase icon-page' aria-hidden='true'></i>"
        },
        blogConstants: {
            pageTitle: 'My Blog',
            pageIcon: "<i class='fa fa-comments-o icon-page' aria-hidden='true'></i>"
        },
        achievementsConstants: {
            pageTitle: 'My Achievements',
            pageIcon: "<i class='fa fa-trophy icon-page' aria-hidden='true'></i>"
        },
        events:{
            pageTitleEvent: 'pageTitleEvent'
        }
});