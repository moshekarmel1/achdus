var app = angular.module('tag');
app.controller('MainCtrl', ['$scope', 'urls', 'auth', '$window', function($scope, urls, auth, $window){
    $scope.isLoggedIn = auth.isLoggedIn;
    $scope.currentUser = auth.currentUser;
    $scope.urls = urls.urls;

    $scope.getMatch = function(){
    	if(!$scope.search || $scope.search === '') {
            $scope.error = {
                class: 'warning',
                message: 'Please fill out a search term...'
            };
            return;
        }
    	urls.getURLs($scope.search).success(function(data){
    		console.log(data);
    	});
    };
}]);
