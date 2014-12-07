var myApp = angular.module('myApp', []);
myApp.factory('richardData', function(){
    return {message:"I'm global!"};
});
function FirstCtrl($scope, richardData){
    $scope.data = richardData;
}

function SecondCtrl($scope, richardData){
    $scope.data = richardData;
}