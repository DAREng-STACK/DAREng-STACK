angular.module('main')

  .component('topfive', {
    controller: () => {
      //render five images dynamically on the the component

      let topfiveimages = [];

      this.getTopFive = () => {
        //trigger a get request to db (through server) to get top 5 most liked images
        //possibly declare this function in app and pass it using binding
      }



    //ng-repeat gets used in the template
    <div ng-repeat="image in topfiveimages">
      <img ng-src="{{image.link}}"/>
        <p>{{image.name}}</p>
        <p>{{image.comments}}</p>
        <p>{{image.likes}}</p>
        <p>{{image.dislikes}}</p>
        <p>{{image.timestamp}}</p>
        <p>{{image.location}}</p>
    </div>

        //IN CONTROLLER
    //   products = [{ 
    //   name: 'The Book of Trees', 
    //   price: 19, 
    //   pubdate: new Date('2014', '03', '08'), 
    //   cover: 'img/the-book-of-trees.jpg',
    //   likes: 0,
    //   dislikes: 0
    // }, 
    // { 
    //   name: 'Program or be Programmed', 
    //   price: 8, 
    //   pubdate: new Date('2013', '08', '01'), 
    //   cover: 'img/program-or-be-programmed.jpg',
    //   likes: 0,
    //   dislikes: 0
    // }]

    //IN TEMPLATE
    // <div ng-repeat="product in products" class="col-md-6"> 
    //   <div class="thumbnail"> 
    //     <img ng-src="{{ product.cover }}"> 
    //       <p class="title">{{ product.name }}</p> 
    //       <p class="price">{{ product.price | currency }}</p> 
    //       <p class="date">{{ product.pubdate | date }}</p> 
    //     <div class="rating">
    //         <p class="likes" ng-click="plusOne($index)">+ {{ product.likes }} </p>
    //         <p class="dislikes" ng-click="minusOne($index)">-{{product.dislikes}}</p>
    //     </div>
    //   </div>
    // </div>


    },
    templateUrl: '../templates/topfive.html',
  });