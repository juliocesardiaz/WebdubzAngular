angular.module('webdubz')
   .controller('UploadCtrl', ['$scope', 'Upload', '$timeout', '$http', '$state', 
   function($scope, Upload, $timeout, $http, $state) {
   
   $scope.uploadTrax = function(file) {
      $http.get('http://webdubz.com/api/v1/csrf').then( function(response) {        
         file.upload = Upload.upload({
            url: 'http://webdubz.com/api/v1/upload',
            method: 'POST',
            headers:{'X-Csrf-Token': response},
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
               return response.status;
            });
         }, function(response) {
            if (response.status > 0)
               $scope.errorMsg = response.status + ':' + response.data; 
         }, function (evt) {
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            if(file.progress = 100);
               $state.go('trax');
         }).then( function(status) {
            // if(status = 0)
            //    $state.go('trax');
         });
      });
   }
}]);