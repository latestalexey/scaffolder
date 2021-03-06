'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:ImageEditor
 * @description
 * # ImageEditor
 */
angular.module('webAppApp')
  .directive('imageEditor', function () {
    return {
      templateUrl: 'views/directives/imageEditor.html',
      scope: {
        ngModel: '=',
        ngDisabled: '=',
        filesLocationUrl: '=',
        filesUploadUrl: '='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      },
      controller: ['$scope', 'api', 'FileUploader', function ($scope, api, FileUploader) {

        var uploader = new FileUploader({
          url: api.getStorageEndpoint(),
          removeAfterUpload: true,
          autoUpload: true
        });

        $scope.uploader = uploader;
        $scope.showProgress = false;

        uploader.onBeforeUploadItem = function () {
          $scope.showProgress = true;
        };

        uploader.onAfterAddingFile = function () {
          uploader.queue[uploader.queue.length - 1].headers.Authorization = "Bearer " + api.getToken();
        };

        uploader.filters.push({
          name: 'customFilter',
          fn: function (item /*{File|FileLikeObject}*/, options) {
            return this.queue.length < 10;
          }
        });

        uploader.onErrorItem = function () {
          $scope.uploadedFileUrl = '';
        };

        uploader.onCompleteItem = function (fileItem, response) {
          debugger;
          $scope.ngModel = response.name;
          $scope.showProgress = false;
        };

        function isUrl(str) {
          return !!str && str.indexOf('http') > -1;
        }

        $scope.$watch('ngModel', function (o, n) {

          if (o != n) {
            $scope.imageUrl = !!isUrl($scope.ngModel)
              ? $scope.ngModel
              : api.getStorageEndpoint() + '?name=' + $scope.ngModel;
          }

        });

      }]
    };
  });
