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
        return $http.get('/urls/' + name, {}).then(function(res){
            return res.data;
        }, function(err){
            return err;
        });
    };
    
    o.add = function(url){
        return $http.post('/urls', url, {
            headers: {
                Authorization: 'Bearer ' + auth.getToken()
            }
        }).then(function(data){
            return data;
        }, function(err){
            return err;
        });
    };

    return o;
}]);
