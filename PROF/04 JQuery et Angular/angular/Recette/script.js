var app = angular.module("app", []);

app.controller("myController", function($scope){
  // initialisation du calendrier
  man$calendrier.generate();

  // initialisation des menus
  $scope.lstDays = man$calendrier.lstDates;
  $scope.lstRepas = man$lstRepas;
  $scope.selectedDate = 0;
  $scope.selectedRepas = 0;


  // initialisation du carnet
  // TODO : l'initialisation est ici faite sans appel au serveur
  $scope.carnet = new Carnet();

  $scope.getLstPlats = function(){
    if($scope.selectedDate!=null && $scope.selectedRepas!=null){
      return $scope.carnet.lstjournees[$scope.selectedDate].lstRepas[$scope.selectedRepas].lstPlats;
    }
    else{
      return [];
    }
  }



  $scope.clickDate = function(id){
    $scope.selectedDate= id;
  }
  $scope.clickRepas = function(id){
    $scope.selectedRepas= id;
  }

});
