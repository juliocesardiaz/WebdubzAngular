var webdubz = angular.module('webdubz', ['ui.router']);

webdubz.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '',
        templateUrl: 'partials/home.html',
        controller: 'TraxCtrl'
    });
    $stateProvider.state('trax', {
        url: '/trax',
        templateUrl: 'partials/trax.html',
        controller: 'TraxCtrl'
    });
}]);