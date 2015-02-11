'use strict';

/**
* @ngdoc function
* @name Blogger.controller:LoginCtrl
* @description LoginCtrl
* Controller of the Blogger
*/

angular.module('Blogger')
.controller('LoginCtrl', function (User,alertService) {
  var vm = this;
  vm.login = login

  function login(username,password) {
    console.warn(username + ' user');
    console.warn(password + ' password');
    
    User.login(username,password)
    .then(function success(response) {
      debugger;
      vm.user = response.data;
      alertService('success','Yayy!','you are Logged In');
      console.log('post success',response);
    },errorHandler);
  }

  function errorHandler(response) {
    alertService('danger','Oops!','could not register');
    console.error(response,'failed');
  }

});

