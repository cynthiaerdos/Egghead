var app = angular.module('choreApp', []);

app.controller('choreCtrl', function($scope){
    $scope.chore = function(chores){
        alert(chores + "done!");
    }
});

app.directive("kid", function(){
    return {
        scope: {
            chore: "&"
        },
        restrict: "E",
        template: '<input type="text" ng-model="chore"> {{chore}} <button ng-click="chore({chore:chore})">Button</button>'
    }
});
