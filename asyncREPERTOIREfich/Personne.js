function Personne(){

	this.id="";	
	this.prenom=null;	
	this.nom=null;
	this.tel=null;
	

	this.setPersonnePNTel=function(p,n,tel){
		this.prenom=p;
		this.nom=n;
		this.tel=tel;
		
	}













	this.getPersonne=function(){
		
	}

	this.setPersonne=function(id,prenom,nom){
		this.id=id;
		this.nom=nom;
		this.prenom=prenom;
		
	}


	this.setPersonne=function(Personne){
		this.nom=Personne.nom;
		this.prenom=Personne.prenom;
	}



	this.setPersonne2=function(prenom,nom){
		this.nom=nom;
		this.prenom=prenom;
		
	}

}