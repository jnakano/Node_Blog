'use strict';

angular.module('Blogger',['ui.router'])

.constant('API_URL','localhost:8000')

.config(function($urlRouterProvider,$stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'views/main.html'
  })  
  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html'
  })  
  .state('posts', {
    url: '/posts',
    templateUrl: 'views/posts.html'
  })  
  .state('register', {
    url: '/register',
    templateUrl: 'views/register.html'
  });
});
