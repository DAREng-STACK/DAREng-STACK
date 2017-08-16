angular.module('main')

  .component('username', {
    controller: function ($http) {


    this.sendSignUpDataToDatabase = function (data) {
      $http({
        method: 'POST',
        url: '/signup',
        data: data ,
        success: function(res) {
          console.log("Success", res)
        }
      })
    }
  

    },
    templateUrl: '../templates/username.html',
  });