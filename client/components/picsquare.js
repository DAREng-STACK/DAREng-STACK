angular.module('main')
  .component('picsquare', {
    controller: function($http) {

      this.comments = [];
      this.liked = 0;
      this.disliked = 0;

      this.getImageData = function () {
        $http({
          method: 'GET',
          url: '/images' ,
          success: function(res) {
            console.log("Success", res)
            //pull different parts out of respose to put in appropriate places
            //comments.push(res.comments);
            //this.liked = res.liked;
            //this.disliked = res.disliked;
          }
        })
      }

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

      this.handleLikeClick = () => {
        this.liked++;
        this.postRequestHandler('/likes', this.liked);
      }

      
      this.handleDislikeClick = () => {
       this.disliked++;
       this.postRequestHandler('/dislikes', this.disliked);
      }

      this.handleCommentSubmit = function (comment) {
        console.log(this.comment);
        this.postRequestHandler('/comments', this.comment);
        this.comments.push(this.comment);
        this.comment = null;
      }

    },
    templateUrl: '../templates/picsquare.html',
    bindings: {
      sortedbytimestampimages: '<',
      image: '<'
    }
  });
