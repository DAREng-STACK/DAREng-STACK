angular.module('main')

.component('postimage', {
  bindings: {
    location: '=',
  },
  controller: function($scope, angularFilepicker, serverComm) {
    angularFilepicker.setKey('Al60Bq96KSauJLQY0F8Dbz');

    $scope.pickFile = pickFile;

    function pickFile() {
      angularFilepicker.pick({ mimetype: "image/*" }, onSuccess);
    };

    function onSuccess(Blob) {
      console.log('blob result ', Blob);
      let url = Blob.url;
      let name = Blob.filename;
      let data = {
        'name': name,
        'url': url
      };
      console.log(data);
      //on success invoke parent function form app component.
      serverComm.postContent(data, this.get);
      //after post trigger app to get images...
    };
    this.$onInit = function () {
      // console.log(this.get, 'SCOPPPE?');
    }
  },

  templateUrl: '../templates/postImage.html',
  bindings: {
    get: '<'
  }
});
