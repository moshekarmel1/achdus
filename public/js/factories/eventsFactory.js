var app = angular.module('achdus');
app.factory('events', ['$http', 'auth', '$window', function($http, auth, $window){
    var o = {
        events: []
    };

    o.getAll = function() {
        return $http.get('/events').success(function(data){
            angular.copy(data, o.events);
        });
    };

    return o;
}]);
