'use strict';

/**
 * @ngdoc service
 * @name bloggerApp.alert
 * @description
 * # alert
 * Service in the bloggerApp.
 */
angular.module('Blogger')
  .service('alertService', function ($rootScope,$timeout) {
    var alertTimeout;
    return function(type,title,message,timeout) {
      $rootScope.alert = {
       hasBeenShown: true,
       show: true,
       type: type,
       message: message,
       title: title
      };
      $timeout.cancel(alertTimeout);
      alertTimeout = $timeout(function() {
       $rootScope.alert.show = false; 
      },timeout || 2000);
    };
  });
