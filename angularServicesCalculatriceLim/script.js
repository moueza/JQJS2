var app = angular.module("app", []);

app.controller("myController", function ($scope, addService, minusService) {
// ça commence là
    $scope.showContent = true;


    app.service('operation', function () {
        this.ditHello = function (x) {
            return "Hello";
        }



        this.addService = function () {
           return  parseInt($scope.showContent1) - parseInt($scope.showContent2);
        }


        this.minusService = function () {
            //$scope.resultat = parseInt($scope.showContent1) - parseInt($scope.showContent2);
            return parseInt($scope.showContent1) - parseInt($scope.showContent2);
        }
    });

    $scope.add = function () {
        //$scope.resultat = parseInt($scope.showContent1) + parseInt($scope.showContent2);
        $scope.resultat = operation.addService();
    }



    $scope.minus = function () {
        $scope.resultat = parseInt($scope.showContent1) - parseInt($scope.showContent2);
    }


}

// ça se termine là
);
