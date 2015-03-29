var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: "app.html",
            controller: "AppCtrl"
        }
    );

    $routeProvider.when('/drink',
        {
            templateUrl: "app2.html"
        }
    )
});

app.controller("AppCtrl", function($scope) {
    $scope.model = {
        message: "This is my app!!!"
    }
});