'use strict';

/**
* @ngdoc function
* @name Blogger.controller:RegisterCtrl
* @description
* # RegisterCtrl
* Controller of the Blogger
*/
angular.module('Blogger')
.controller('RegisterCtrl', function ($scope,User,alertService) {
  $scope.login = login

  function login(username,password,confirm_password) {
    User.login(username,password,confirm_password)
    .then(function success(response) {
      $scope.user = response.data;
      alertService('success','Yayy!','you are now registered');
      console.log('post success',res);
    },errorHandler);
  }

  function errorHandler(response) {
    alertService('danger','Oops!','could not register');
    console.error(response,'failed');
  }

});
