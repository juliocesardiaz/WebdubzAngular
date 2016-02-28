angular.module('webdubz')
   .factory('TraxFactory', ['$http', function($http) {
      
      var TraxFactory = {};
      
      TraxFactory.getTrax = function() {
         return $http.get('http://localhost:8000/api/v1/dubz');
      };
      
      return TraxFactory;
}]);