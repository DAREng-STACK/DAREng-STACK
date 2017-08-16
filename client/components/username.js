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
      this.user = null;
    }
  

    },
    templateUrl: '../templates/username.html',
  });