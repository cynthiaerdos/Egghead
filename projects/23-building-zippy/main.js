angular.module('zippy', [])
.directive('zippy', function(){
        return {
            restriction: "E",
            transclude: true,
            scope: {
                title: "@"
            },
            template: '<div><h3 ng-click="toggleContent()">{{title}}</h3> <ng-transclude ng-show="isContentVisible"></ng-transclude></div>',
            link: function(scope){
                scope.isContentVisible = false;
                scope.toggleContent = function(){
                    scope.isContentVisible = !scope.isContentVisible;
                };
            }
        }
    });