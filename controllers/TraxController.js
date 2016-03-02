/* global angular */
angular.module('webdubz')
   .controller('TraxCtrl', ['$scope', '$http', 'TraxFactory', function($scope, $http, TraxFactory) {
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
    
    $scope.waveform = Object.create(WaveSurfer);
    $scope.waveform.init({
         container: '#waveform',
         waveColor: '#A4BFD8',
         progressColor: '#3C92E8',
         barWidth: 2
      });
      $scope.loadTrax = function(track) {
         $scope.waveform.empty();
         $scope.waveform.load('http://webdubz.dev' + track.path_lq);
         
      }
      $scope.playTrax = function() {
         $scope.waveform.play(); 
      };
      
      $scope.pauseTrax = function() {
         $scope.waveform.pause();
      };
      $scope.downloadTrax = function(id) {
         window.location = ('http://webdubz.dev/api/v1/download/' + id);
      }
      
      $scope.destroyTrax = function() {
         $scope.waveform.destroy();
      };
}]);