angular.module('main')

  .component('topfive', {
    controller: () => {


  },
    templateUrl: '../templates/top-five.html',
    bindings: {
      top5img: '<'
    }
  });
