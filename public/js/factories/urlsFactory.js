var app = angular.module('tag');
app.factory('urls', ['$http', 'auth', '$window', function($http, auth, $window){
    var o = {
        urls: []
    };

    o.getAll = function() {
        return $http.get('/urls').success(function(data){
            angular.copy(data, o.urls);
        });
    };

    o.getURLs = function(name) {
        return $http.get('/urls/' + name).then(function(res){
            return res.data;
        });
    };

    return o;
}]);
