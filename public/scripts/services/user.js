'use strict';

/**
* @ngdoc service
* @name bloggerApp.User
* @description
* # User
* Factory in the bloggerApp.
*/
angular.module('Blogger')
.factory('User', function ($http,alertService,API_URL) {
  var register_url = API_URL + '/auth/register';

  function login(username,password,confirm_password)
    return $http.post(register_url,{
      username: username,
      password: password,
      confirm_password: confirm_password
    });

  // Public API here
  return {
    login:login
  }
});
