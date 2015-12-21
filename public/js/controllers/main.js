var app = angular.module('achdus');
app.controller('MainCtrl', ['$scope', 'events', 'auth', '$window', function($scope, events, auth, $window){
    $scope.isLoggedIn = auth.isLoggedIn;
    $scope.currentUser = auth.currentUser;
    $scope.events = events.events;

    $scope.order = '-upvotes';

    $scope.setOrder = function (order) {
        $scope.order = order;
    };

    $scope.add = function(){
        $window.location.href = '/#/add';
    };
}]);
