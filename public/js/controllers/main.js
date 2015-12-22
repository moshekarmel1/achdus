var app = angular.module('tag');
app.controller('MainCtrl', ['$scope', 'urls', 'auth', '$window', function($scope, urls, auth, $window){
    $scope.isLoggedIn = auth.isLoggedIn;
    $scope.currentUser = auth.currentUser;
    
    $scope.getMatch = function(){
    	if(!$scope.search || $scope.search === '') {
            $scope.error = {
                class: 'warning',
                message: 'Please fill out a search term...'
            };
            return;
        }
    	urls.getURLs($scope.search).then(function(response){
            if(response.urls){
                $scope.urls = response.urls;
            }else{
                $scope.error = response.data;
            }
    	});
    };
    
    $scope.add = function(){
        $window.location.href = '/#/add';
    };
    
    $scope.addURL = function(){
    	if(!$scope.name || $scope.name === '') {
            $scope.error = {
                class: 'warning',
                message: 'Please fill out a name...'
            };
            return;
        }
        if(!$scope.whitelist || $scope.whitelist === '') {
            $scope.error = {
                class: 'warning',
                message: 'Please fill out a whitelist...'
            };
            return;
        }
    	urls.add({
            name: $scope.name.trim(),
            urls: $scope.whitelist.split(',')
        }).then(function(response){
            console.log(response);
    	});
    };
}]);
