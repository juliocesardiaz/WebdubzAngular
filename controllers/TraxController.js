/* global angular */
angular.module('webdubz')
   .controller('TraxCtrl', ['$scope', 'TraxFactory', function($scope, TraxFactory) {
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
    $scope.wavesurfer = Object.create(WaveSurfer);
     
    $scope.loadTrax = function(track) {
      
      console.log(track.id)
      $scope.wavesurfer.init({
         container: '#' + track.artist,
         waveColor: 'violet',
         progressColor: 'purple'
      });
      $scope.wavesurfer.load(track.path_lq);
      $scope.wavesurfer.play();
    };
    $scope.playTrax = function() {
       
    };
}]);