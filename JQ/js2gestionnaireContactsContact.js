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

}


