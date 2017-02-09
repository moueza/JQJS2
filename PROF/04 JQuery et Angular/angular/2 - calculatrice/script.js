var app = angular.module("app", []);

app.controller("myController", function($scope){
    $scope.a = 0;
    $scope.b = 0;
    $scope.res = 0;

   	$scope.addition = function(){
   		$scope.res = Number($scope.a) + Number($scope.b);
   	};

   	$scope.moins = function(){
   		$scope.res = Number($scope.a) - Number($scope.b);
   	};

   	$scope.fois = function(){
   		$scope.res = Number($scope.a) * Number($scope.b);
   	};

   	$scope.div = function(){
   		$scope.res = Number($scope.a) / Number($scope.b);
   	};
});
