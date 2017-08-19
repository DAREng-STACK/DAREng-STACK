angular.module('main')
  .component('picsquare', {
    controller: function() {

      // var showComments = false;

      this.showCommentsFunc = function(showComments) {
        this.showComments = !this.showComments
        console.log(this.showComments)
        return this.showComments;
      }

      this.liked = 0;
      
      this.handleLikeClick = () => {
        this.liked++;
      }

      this.disliked = 0;

      this.handleDislikeClick = () => {
       this.disliked++;
      }

      this.postComment = (textOfComment) => {
        //(button that the user can click)
        //(when clicked a textbox will appear)
        //when text is submitted
          //post request to db to save the text of the comment to the image along with the username of the user who posed the comment (current user logged in)
          //somehow this image needs to be rerendered so the new comment will be displayed
      }

      this.handleClick = () => {
        //picture expands (to full screen?)
        //comments become visable
        //likes/dislikes are visable
        //comment button becomes available
        //ability to like/dislike is available
      }
    },
    templateUrl: '../templates/picsquare.html',
    bindings: {
      sortedbytimestampimages: '<',
      image: '<'
    }
  });
