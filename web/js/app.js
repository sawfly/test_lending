var app = angular.module('sawfly', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'main.html'
        })
});

app.config(function ($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
});

var api_host = 'http://test_lending.app/api/';