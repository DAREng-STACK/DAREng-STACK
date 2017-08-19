angular.module('main')
  .component('picsquare', {
    controller: function($http) {

      this.postRequestHandler = function(url, data) {
        $http({
          method: 'POST',
          url: url ,
          data: { data } ,
          success: function(res) {
            console.log("Success", res)
          }
        })
      }

      this.showCommentsFunc = function(showComments) {
        this.showComments = !this.showComments
        return this.showComments;
      }

      this.liked = 0;
      this.handleLikeClick = () => {
        this.liked++;
        this.postRequestHandler('/likes', this.liked);
      }

      this.disliked = 0;
      this.handleDislikeClick = () => {
       this.disliked++;
       this.postRequestHandler('/dislikes', this.disliked);
      }

      this.handleCommentSubmit = function (comment) {
        console.log(this.comment);
        this.postRequestHandler('/comments', this.comment);
        this.comment = null;
      }

    },
    templateUrl: '../templates/picsquare.html',
    bindings: {
      sortedbytimestampimages: '<',
      image: '<'
    }
  });
