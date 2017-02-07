var app = angular.module("app", []);

app.controller("myController", function($scope){
// ça commence là
    $scope.showContent = true;

 

    $scope.add = function(){
     	$scope.resultat = parseInt($scope.showContent1) + parseInt($scope.showContent2);
    }

       


// ça se termine là
});
