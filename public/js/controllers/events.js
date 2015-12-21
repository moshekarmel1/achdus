var app = angular.module('achdus');
app.controller('EventsCtrl', ['$scope', 'events', 'event', 'auth', function($scope, events, event, auth){
    $scope.isLoggedIn = auth.isLoggedIn;
    /*$scope.event = event;
    $scope.edit = false;
    $scope.currentUser = auth.currentUser;

    $scope.order = '-upvotes';

    $scope.setOrder = function (order) {
        $scope.order = order;
    };

    $scope.toggleEdit = function(){
        $scope.edit = !$scope.edit;
    };

    $scope.save = function(){
        events.update(event._id, {
            postBody: $scope.updatedVersion
        }).success(function(data){
            $scope.post.postBody = data.postBody;
            $scope.updatedVersion = data.postBody;
            $scope.edit = false;
        });
    };

    $scope.addComment = function(){
        if($scope.body === '' || !auth.isLoggedIn()) {
            return;
        }
        posts.addComment(post._id, {
            body: $scope.body
        }).success(function(comment) {
            $scope.post.comments.push(comment);
        });
        $scope.body = '';
    };

    $scope.upvote = function(post){
        if(!auth.isLoggedIn()) return;
        if(auth.currentUser() === post.author) return;
        posts.upvote(post).error(function(error){
            $scope.error = error;
        });
    };

    $scope.incrementUpvotes = function(comment){
        if(auth.currentUser() === comment.author) return;
        posts.upvoteComment(post, comment).error(function(error){
            $scope.error = error;
        });
    };*/
}]);