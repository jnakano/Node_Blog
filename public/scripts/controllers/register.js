'use strict';

/**
* @ngdoc function
* @name Blogger.controller:RegisterCtrl
* @description
* # RegisterCtrl
* Controller of the Blogger
*/
angular.module('Blogger')
.controller('RegisterCtrl', function (User,alertService) {
  var vm = this;
  vm.register = register

  function register(email,username,password,confirm_password) {

    if(password != confirm_password) return alertService('danger', 'Oops', 'Passwords do not match!');
    User.register(email,username,password)
    .then(function success(response) {
      vm.user = response.data;
      alertService('success','Yayy!','you are now registered');
      console.log('post success',res);
    },errorHandler);
  }

  function errorHandler(response) {
    alertService('danger','Oops!','could not register');
    console.error(response,'failed');
  }

});
