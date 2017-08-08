angular.module('main', [])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([ 'self' ]);
  });
