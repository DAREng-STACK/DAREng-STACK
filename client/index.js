angular.module('main', [])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([ 'self' ]);
  })
  .service('angularFilepicker', function($window){
    return $window.filepicker;
});
