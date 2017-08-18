angular.module('main')

.component('postimage', {
  controller: function (Upload, $timeout) {
    this.uploadPic = function(file) {
      console.log('YAY CLICK!! ', file);
      file.upload = Upload.http({
        url: '/images',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: file,
      });
  
      file.upload.then(function (response) {
        $timeout(function () {
          file.result = response.data;
        });
      }, function (response) {
        if (response.status > 0)
          this.errorMsg = response.status + ': ' + response.data;
      }, function (evt) {
        // Math.min is to fix IE which reports 200% sometimes
        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
      }
  },
  templateUrl: '../templates/postImage.html'
});