var app = angular.module("app", []);

app.service('calculatrice', function() {
    this.add = function (a,b) {
        return a+b;
    }
    this.minus = function (a,b) {
        return a-b;
    }
});

app.controller("myController", function($scope,calculatrice,$timeout){
  $scope.a=0;
  $scope.b=0;
  $scope.res=0;
  $scope.display = true;

  $timeout(function(){
    $scope.display = false;
  },10000);

  $scope.add = function(){
    $scope.res = calculatrice.add(Number($scope.a),Number($scope.b));
  };

  $scope.minus = function(){
    $scope.res = calculatrice.minus(Number($scope.a),Number($scope.b));
  };
});
