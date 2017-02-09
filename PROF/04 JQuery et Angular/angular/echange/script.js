var app = angular.module("app", []);

app.controller("myController", function($scope){
  $scope.lstCases = [
    {couleur:"red"},
    {couleur:"yellow"},
    {couleur:"blue"},
    {couleur:"green"}
  ];

  $scope.change = function (index){
      var autre = 0;
      if(index!=$scope.lstCases.length-1){
        autre = index+1;
      }
      var id = $scope.lstCases[index];
      $scope.lstCases[index]=$scope.lstCases[autre];
      $scope.lstCases[autre]=id;
  };
});
