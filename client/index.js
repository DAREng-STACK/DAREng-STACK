angular.module('main', ['ngFileUpload'])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([ 'self' ]);
  });
