var app = angular.module("app", []);

app.controller("myController", function($scope,$interval){
  $scope.lstMessages = [];

  $interval(function () {
      $scope.heure = new Date().toLocaleTimeString();
  }, 1000);

  $scope.ajout = function(){
    message = new Message($scope.nom, $scope.message, $scope.heure);
    $scope.lstMessages.push(message);
  }


});
