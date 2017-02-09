var app = angular.module("app", []);

app.controller("myController", function($scope){
	var motATrouver ="chien";

	$scope.lstEssais=[];
	$scope.fond ="blanc";

	$scope.ajouter = function(){

		if($scope.choix==motATrouver){
			$scope.fond ="jaune";
			$scope.lstEssais.push("GAGNE !!!");
		}
		else{
			$scope.lstEssais.push("mauvaise reponse :"+$scope.choix);
		}	
	};
   	
});