'use strict';

angular.module('jxlDebug')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      {
        'key': 'report',
        'title': '数据报告接口',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'key': 'query',
        'title': '查询接口',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'key': 'tool',
        'title': '工具接口',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      }
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      console.log(awesomeThing);
      //awesomeThing.rank = Math.random();
    });
  });
