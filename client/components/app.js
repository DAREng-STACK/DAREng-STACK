angular.module('main')

  .component('app', {
    controller: (serverGet) => { //serverGet is in server folder. Can be here through scope?
    	this.images = [];
      this.renderimages = (newImages) => {
      	this.images = newImages;
      }

      serverGet.getimages(this.renderimages);
    },
    templateUrl: '../templates/app.html',
  });