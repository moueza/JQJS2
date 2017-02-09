var app = angular.module("app", []);

app.controller("myController", function($scope){
// ça commence là
    $scope.showContent = true;

    $scope.coucou = function(){
      alert("Bonjour Monsieur !");
    }

// ça se termine là
});
