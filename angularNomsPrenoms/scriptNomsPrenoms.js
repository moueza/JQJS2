var app = angular.module("app", []);




function Contact(){
	this.id="";	
	this.nom="";
	this.prenom="";
	




	this.getContact=function(){
		
	}

	this.setContact=function(id,prenom,nom){
		this.id=id;
		this.nom=nom;
		this.prenom=prenom;
		
	}


	this.setContact=function(contact){
		this.nom=contact.nom;
		this.prenom=contact.prenom;
	}



	this.setContact2=function(prenom,nom){
		this.nom=nom;
		this.prenom=prenom;
		
	}


}








app.controller("myController", function($scope){
// ça commence là
    $scope.showContent = true;

 	$scope.showContent1="NOM";
	$scope. showContent2="Prenom";

    $scope.add = function(){
    	c=new Contact();
    	c.setContact2($scope.showContent1,$scope.showContent2);
    	
     	$scope.tablo.push(c);
    }



    $scope.tablo=[];
 

       


// ça se termine là
});
