var app = angular.module('myApp', ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/search", {
            templateUrl: "./views/home.html",
            controller: "homeCtrl"
        })
        .when("/test", {
            templateUrl: "./views/home.html",
            controller: "homeCtrl"
        })
        .otherwise({ redirectTo: '/home' });
    $locationProvider.html5Mode(true); //activate HTML5 Mode
});