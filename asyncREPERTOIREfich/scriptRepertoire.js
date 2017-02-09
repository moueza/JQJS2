var app = angular.module("app", []);
app.controller("myController", function($scope, $http) {
	//http://www.w3schools.com/angular/angular_http.asp
    $http.get("repertoire2.txt").then(
    			function (response)   {
  		 			 $scope.myData = response.data.records;//http://www.w3schools.com/angular/angular_http.asp
    								  }
    								)
    ;
    $scope.r = new Repertoire();
	$scope.r.personsList =[];
	//TODO chargement fichier
	
	$scope.prenom="";
	$scope.nom="";
	$scope.tel="";





	//new!!!!!!!!!!!!
    $scope.addPerson =  function(){
    	var p=new Person();
    	
    	// p.setPersonne2($scope.showContent1,$scope.showContent2);
    	 p.setPersonne2($scope.nom,$scope.prenom,$scope.tel);
     	$scope.tablo.push(c);
    };


	/*
	{"prenom":"Peter","nom":"MOUEZA","tel":"06.01.23.45.45"},
	{"prenom":"Jean","nom":"CARMET","tel":"06.99.55.41.99"}



*/
	$scope.loadDocc =  function() {
		console.log("in loaddoc");



		/*
	    var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	        if (this.readyState == 4 && this.status == 200) {
	            document.getElementById("demo").innerHTML =
	            this.responseText;
	       }
	    };
	    xhttp.open("GET", "repertoire.txt", true);
	    xhttp.send();*/


	    /*
	    $http.get("repertoire.txt").then(function(response) {
        	$scope.myData = response.data.phoneNumbers;
    	});
    	*/
	} ;

	$scope.loadDocc();









    $scope.addPerson = function(){
    	p=new Person();
    	
    	// p.setPersonne2($scope.showContent1,$scope.showContent2);
    	 p.setPersonne2($scope.nom,$scope.prenom,$scope.tel);
     	$scope.tablo.push(c);
    }
});


function Repertoire(){
	this.personsList=null;	
}

