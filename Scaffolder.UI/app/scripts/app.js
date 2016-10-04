'use strict';

/**
 * @ngdoc overview
 * @name webAppApp
 * @description
 * # webAppApp
 *
 * Main module of the application.
 */
angular
    .module('webAppApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.pagination',
        'textAngular',
        'ui.select',
        'angularFileUpload',
        'ui.bootstrap',
        'ngclipboard'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/grid/:table', {
                templateUrl: 'views/grid.html',
                controller: 'GridCtrl',
                controllerAs: 'grid'
            })
            .when('/detail/:table', {
                templateUrl: 'views/detail.html',
                controller: 'DetailCtrl',
                controllerAs: 'detail'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/administration', {
                templateUrl: 'views/administration.html',
                controller: 'AdministrationCtrl',
                controllerAs: 'administration'
            })
            .when('/storage', {
              templateUrl: 'views/storage.html',
              controller: 'StorageCtrl',
              controllerAs: 'storage'
            })
            .otherwise({
                redirectTo: '/'
            });
    });