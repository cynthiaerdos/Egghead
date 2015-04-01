var app = angular.module("app", []);

app.controller("MyCtrl", ['$scope', '$http', function(b, a) {
    console.log(b);
}]);

app.directive("myDirective", function($http, $parse) {
    return {
        link: function(scope, sscope, attrs) {
            console.log(scope);
        }
    }
});