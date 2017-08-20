angular.module('main')
  .component('app', {
    controller: function(serverComm, Lightbox) {
      this.images = [];
      this.topfiveimages = [];
      this.location = {};

      this.$onInit = function () {
        serverComm.getLocation(
          (location) => {
            this.location = location;
            console.log(this.location)
          }
        )
        serverComm.getImages((result) => {
          this.images = result.sort(function (a,b) {
            return b.timeStamp - a.timeStamp;
          })

          this.topfiveimages = this.images.sort(function(a, b) {
            return b.likeCount - a.likeCount;
        });
          console.log('top 5', this.topfiveimages);
          console.log('images sorted ', this.images);
        }); 
      };

      this.openLightboxModal = function (index) {
        Lightbox.openModal(this.images, index);
      };
    },
    templateUrl: '../templates/app.html'
  });
