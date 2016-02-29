angular.module('webdubz')
   .controller('UploadCtrl', ['$scope', 'Upload', '$timeout', 
   function($scope, Upload, $timeout) {
   
   $scope.uploadTrax = function(file) {
      file.upload = Upload.upload({
         url: 'http://localhost:8000/api/v1/upload',
         data: {
            track: file,
            title: $scope.traxTitle,
            artist: $scope.traxArtist,
            max_downloads: $scope.traxMaxDL,
         }
      });
      
      file.upload.then(function (response) {
         $timeout(function () {
            file.result = response.data;
         });
      }, function(response) {
         if (response.status > 0)
            $scope.errorMsg = response.status + ':' + response.data; 
      }, function (evt) {
         file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
   }
}]);