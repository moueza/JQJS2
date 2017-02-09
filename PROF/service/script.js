var app = angular.module("app", []);

app.service('hello', function() {
    this.ditHello = function (x) {
        return "Hello";
    }
});

app.controller("myController", function($scope,hello){
  $scope.txt = hello.ditHello();
});
