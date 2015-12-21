var app = angular.module('tag');
app.controller('WhitelistCtrl', ['$scope', 'urls', 'url', 'auth', function($scope, urls, url, auth){
    $scope.isLoggedIn = auth.isLoggedIn;
}]);
