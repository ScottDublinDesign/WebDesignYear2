angular.module('app', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './js/states/home/home.html',
                controller: 'HomeController',
                name: 'Home'
            })
            .state('map', {
                url: '/map/:id',
                templateUrl: './js/states/map/map.html',
                controller: 'MapController',
                name: 'Map'
            })

        $urlRouterProvider.otherwise("/");
    })
