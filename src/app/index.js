'use strict';

angular.module('jxlDebug', ['ngAnimate', 'ngSanitize', 'ngResource', 'ui.router','hljs'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('report', {
        url: '/report/',
        templateUrl: 'app/report/main.html',
        controller: 'reportCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });

