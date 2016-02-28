angular.module('webdubz')
   .controller('TraxCtrl', ['$scope', 'TraxFactory', 
      function($scope, TraxFactory) {
   $scope.status;
   $scope.trax;
   getTrax();
   function getTrax() {
        TraxFactory.getTrax()
            .success(function (traxx) {
                $scope.trax = traxx;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    };     
}]);