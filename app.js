var webdubz = angular.module('webdubz', ['ui.router', 'ngFileUpload']);

webdubz.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '',
        templateUrl: 'partials/home.html'
    });
    $stateProvider.state('trax', {
        url: '/trax',
        templateUrl: 'partials/trax.html',
        controller: 'TraxCtrl'
    });
    $stateProvider.state('upload', {
        url: '/upload',
        templateUrl: 'partials/upload.html',
        controller: 'UploadCtrl'
    });
}]);