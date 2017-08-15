angular.module('main')

.component('heatmap', {
  controller: () => {
    //needs information about app usage from everywhere it's being used
    //somehow renders hot spots onto a map based on that data
    //will need a map image that registers location
    //something with google maps might make this doable?
  },
  templateUrl: '../templates/heat-map.html'
});
