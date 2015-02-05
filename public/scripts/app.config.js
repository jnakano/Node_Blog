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
  .state('register', {
    url: '/register',
    templateUrl: 'views/register.html',
    controller: 'RegisterCtrl'
  });
});