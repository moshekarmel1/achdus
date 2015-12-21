var app = angular.module('tag');
app.controller('MainCtrl', ['$scope', 'urls', 'auth', '$window', function($scope, urls, auth, $window){
    $scope.isLoggedIn = auth.isLoggedIn;
    $scope.currentUser = auth.currentUser;
    $scope.urls = urls.urls;
}]);
