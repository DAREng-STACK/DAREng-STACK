angular.module('main')

  .component('topfive', {
    controller: () => {
      //render five images dynamically on the the component

      //each of these needs to get rendered as a picsquare component fisrt so they have all the necessary methods

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
    templateUrl: '../templates/top-five.html',
    bindings: {
      top5img: '<'
    }
  });
