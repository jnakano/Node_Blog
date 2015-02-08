'use strict';

angular.module('Blogger',['ui.router'])

.constant('API_URL','')


.config(function($urlRouterProvider,$stateProvider,$httpProvider,$locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];


  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'views/main.html'
  })  
  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
    
  })  
  .state('posts', {
    url: '/posts',
    templateUrl: 'views/posts.html',
    controller: 'PostCtrl',
    controllerAs:'vm'
  })  
  .state('register', {
    url: '/register',
    templateUrl: 'views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'vm'
  });
});
