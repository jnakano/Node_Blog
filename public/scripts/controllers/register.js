'use strict';

/**
 * @ngdoc function
 * @name Blogger.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the Blogger
 */
angular.module('Blogger')
  .controller('RegisterCtrl', function ($scope,$http,alertService,API_URL) {
   $scope.submit = function() {

   var url = API_URL + '/register',
       user = {name:'Angular'};
     console.log('submitted!');

     $http.post(url,user)
     .success(function(res) {
       alertService('success','Yayy!','you are now registered');
       console.log('post success',res);
     })
     .error(function(err) {
      console.error(err,'failed');
      alertService('danger','Oops!','could not register');
     });
   };
  });
