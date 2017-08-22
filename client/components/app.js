angular.module('main')
  .component('app', {
    controller: function(serverComm, Lightbox) {
      this.images = [];
      this.topfiveimages = [];
      this.location = {};


      this.$onInit = function () {
        serverComm.getImages((result) => {
          this.images = result.sort(function (a,b) {
            return b.timeStamp - a.timeStamp;
          })

          this.topfiveimages = result.sort(function(a, b) {
            return b.likeCount - a.likeCount;
        });
        });

      };

      this.openLightboxModal = function (index) {
        Lightbox.openModal(this.images, index);
      };
    },
    templateUrl: '../templates/app.html'
   });
