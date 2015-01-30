var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function($scope) {
    $scope.callHome = function(number, network, message) {
        alert("Number: " + number + " network: " + network + " message: " + message + ".")
    }

})

app.directive("phone", function() {
    return {
        restrict: "E",
        scope: {
            number: "@",
            network: "=",
            makeCall: "&"
        },
        template: '<div class="panel">Number: {{number}} | Network: {{network}} <select ng-model="network" ng-options="net for net in networks"></select>' +
            '<input type="text" ng-model="value">' +
            '<div class="button" ng-click="makeCall({number:number,network:network,message:value})">Call home!</div></div>',
        link: function(scope){
            scope.networks = ["Giffgaff", "O2", "T-mobile", "Vodafone"];
            scope.network = scope.networks[0];
        }
    }
})