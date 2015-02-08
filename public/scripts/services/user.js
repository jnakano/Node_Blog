'use strict';

/**
* @ngdoc service
* @name bloggerApp.User
* @description
* # User
* Factory in the bloggerApp.
*/
angular.module('Blogger')
.factory('User', function ($http,API_URL) {
  var register_url = API_URL + '/auth/register';
  var login_url = API_URL + '/auth/login';

  function login(username,password){
    return $http.post(login_url,{
      username: username,
      password: password
    });
  }
  
  function register(username,password,confirm_password){
    return $http.post(register_url,{
      username: username,
      password: password,
      confirm_password: confirm_password
    });
  }

  // Public API here
  return {
    login:login,
    register:register
  }
});
