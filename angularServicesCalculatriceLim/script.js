var app = angular.module("app", []);

app.controller("myController", function($scope,addService,minusService){
// ça commence là
    $scope.showContent = true;

 

    $scope.add = function(){
     	$scope.resultat = parseInt($scope.showContent1) + parseInt($scope.showContent2);
    }



    $scope.minus = function(){
     	$scope.resultat = parseInt($scope.showContent1) - parseInt($scope.showContent2);
    }
       


    $scope.addService = function(){
     	$scope.resultat = parseInt($scope.showContent1) - parseInt($scope.showContent2);
    }


    $scope.minusService = function(){
     	$scope.resultat = parseInt($scope.showContent1) - parseInt($scope.showContent2);
    }
   }

// ça se termine là
);
