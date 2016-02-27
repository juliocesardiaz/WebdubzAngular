webdubz.factory = ('TraxFactory', function TraxFactory($http) {
    var factory = {};
    factory.trax = fetch();
    function fetch(){
        $http.get("http://localhost:8000/dubz")
        .then(function(response){$scope.details = response.data; });
    }   
    return factory;
});