var app = angular.module('tag');
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '/views/home.html',
        controller: 'MainCtrl',
        resolve: {
            postPromise: ['urls', function(urls){
                return urls.getAll();
            }]
        }
    })
    .state('add', {
        url: '/add',
        templateUrl: '/views/add.html',
        controller: 'MainCtrl'
    })
    /*.state('urls', {
        url: '/urls/{name}',
        templateUrl: '/views/url.html',
        controller: 'WhitelistCtrl',
        resolve: {
            url: ['$stateParams', 'urls', function($stateParams, urls) {
                return urls.getURLs($stateParams.name);
            }]
        }
    })*/
    .state('login', {
        url: '/login',
        templateUrl: '/views/login.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'auth', function($state, auth){
            if(auth.isLoggedIn()){
                $state.go('home');
            }
        }]
    })
    .state('register', {
        url: '/register',
        templateUrl: '/views/register.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'auth', function($state, auth){
            if(auth.isLoggedIn()){
                $state.go('home');
            }
        }]
    });
    $urlRouterProvider.otherwise('home');
}])
