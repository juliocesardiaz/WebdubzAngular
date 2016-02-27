var webdubz = angular.module('webdubz', ['ui.router']);

webdubz.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: "",
        views: {
           'body': {
               templateUrl: "partials/home.html",
               controller: 'TraxCtrl'
           }, 
        }
    });
    $stateProvider.state('trax', {
        url: "/trax",
        views: {
           'body': {
               templateUrl: "partials/trax.html",
               controller: 'TraxCtrl'
           }, 
        }
    });
});