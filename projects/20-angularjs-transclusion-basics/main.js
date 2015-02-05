var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function($scope) {

});

app.directive("panel", function() {
    return {
        restrict: "E",
        transclude: true,
        template: '<div class="panel">This is a panel component <ng-transclude></ng-transclude></div>'
    }
})