/**
 * Created by Sekhar on 08/09/2017.
 */
angular
    .module('portfolio')
    .config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "templates/home.html",
            controller: 'homeController',
            controllerAs: 'vm'
        })
        .when("/home", {
            templateUrl : "templates/home.html",
            controller: 'homeController',
            controllerAs: 'vm'
        })
        .when("/blog", {
            templateUrl : "templates/blog.html",
            controller: 'blogController',
            controllerAs: 'vm'
        })
        .when("/portfolio", {
            templateUrl : "templates/resume.html",
            controller: 'resumeController',
            controllerAs: 'vm'
        })
        .when("/skills", {
            templateUrl : "templates/skills.html",
            controller: 'skillsController',
            controllerAs: 'vm'
        })
        .when("/achievements", {
            templateUrl : "templates/achievements.html",
            controller: 'achievementsController',
            controllerAs: 'vm'
        })
        .when("/github", {
            templateUrl : "templates/github.html",
            controller: 'githubController',
            controllerAs: 'vm'
        })

});
