angular.module('main')

  .component('yourmostliked', {
    controller: () => {
      //render top 5 most liked images for the user

      //These need to be picsquare components first so they have all the necessary methods. I'm not quite sure about how that's going to work.

    //ng-repeat gets used in the template
   // <div ng-repeat="image in topfiveimages">
      //<img ng-src="{{image.link}}"/>
       // <p>{{image.name}}</p>
      //  <p>{{image.comments}}</p>
     //   <p>{{image.likes}}</p>
     //   <p>{{image.dislikes}}</p>
      //  <p>{{image.timestamp}}</p>
      //  <p>{{image.location}}</p>
//    </div>
    },
    templateUrl: '../templates/yourmostliked.html',
    bindings: {
      yourmostlikedimages: '<'
    }
  });