angular.module('main')
  .component('picsquare', {
    controller: function($http) {

      this.postRequestHandler = function(data) {
        $http({
          method: 'POST',
          url: '/imageChange' ,
          data: {data} ,
          success: function(res) {}
        })
      }

      this.handleLikeClick = function () {
        this.image.likeCount++;
        this.postRequestHandler(this.image);
      }
      
      this.handleDislikeClick = function () {
       this.image.dislikeCount++;
       this.postRequestHandler(this.image);
      }

      this.handleCommentSubmit = function (comment) {
        this.image.comments.push(this.comment);
        this.postRequestHandler(this.image);
        this.comment = null;
      }

    },
    templateUrl: '../templates/picsquare.html',
    bindings: {
      sortedbytimestampimages: '<',
      images: '=',
      image: '='
    }
  });
