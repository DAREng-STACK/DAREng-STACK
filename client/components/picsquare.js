angular.module('main')
  .component('picsquare', {
    controller: function($http) {
      
      this.postRequestHandler = function(data) {
        $http({
          method: 'POST',
          url: '/imageChange' ,
          data: {data} ,
          success: function(res) {
            console.log("Success", res)
          }
        })
      }

      this.showCommentsFunc = function(showComments) {
        this.showComments = !this.showComments
        return this.showComments;
      }

      this.handleLikeClick = function () {
        this.image.likeCount++;
        this.postRequestHandler(this.image);
        console.log(this.image.likeCount)
      }

      
      this.handleDislikeClick = function () {
       this.image.dislikeCount++;
       this.postRequestHandler(this.image);
       console.log(this.image.dislikeCount)
      }

      this.handleCommentSubmit = function (comment) {
        this.image.comments.push(this.comment);
        this.postRequestHandler(this.image);
        console.log(this.image.comments)
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
