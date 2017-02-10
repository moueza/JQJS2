var app = angular.module("app", []);
//TODO eviter reload de Google Ajax
app.controller("myController", function($scope){

	$scope.grille = new Grille();
	$scope.theend=true;

	// Surveille le fait d'avoir deux cartes retournées
  	$scope.$watch('grille.cptRecto', function() {
        if($scope.grille.cptRecto==2){
          //identifier les 2 recto :
        	$scope.grille.gestionDuDeux();
        }
    }, false     );

  	// Surveille le fait d'avoir gagné 
  	$scope.$watch('grille.cptVide', function() {
        console.log("script cptVide="+$scope.grille.cptVide);
        console.log("script ="+$scope.grille.lstCartes.length);
        
        if($scope.grille.cptVide==$scope.grille.lstCartes.length){
        	alert("Gagné!!");
        	$scope.theend = false;
        }
    }, true);


});