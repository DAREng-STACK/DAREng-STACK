angular.module('main')

  .component('yourmostliked', {
    controller: () => {
 
    },
    templateUrl: '../templates/your-most-liked.html',
    bindings: {
      yourmostlikedimages: '<'
    }
  });