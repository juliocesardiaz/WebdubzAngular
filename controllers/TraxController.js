webdubz.controller('TraxCtrl', function TraxCtrl($scope, $stateParams, TraxFactory) {
   $scope.trax = TraxFactory.trax;
   $scope.TraxFactory = TraxFactory;
});