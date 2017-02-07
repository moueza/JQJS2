function Gestionnaire(){
	
	this.tabloContact =[];

	var contact1 =	 new Contact();
	var contact2 =	 new Contact();
	contact1.setContact(1,"Peter","MOUEZA");
	contact2.setContact(2,"Yves","DUPONT");

	
	this.tabloContact.push(contact1);	
	this.tabloContact.push(contact2);


/**from js2gestionnaireContacts.js*/
	this.getFromId=function(idd){
			console.log("tabloContact="+this.tabloContact);
			//var idString=idd.toString();
			console.log("idString="+idd);
			
			var c = new Contact();
			var trouve =false;
			var memContactIndex=0;
			var i=0;
			console.log("trouveAV"+trouve);
			while((!trouve)&&(i<this.tabloContact.length)){
	          if (idd==(this.tabloContact[i].id)){
				memContactIndex=i;
				trouve=true;
	          }else{
	          	console.log('not found i='+i);
	          }
	          i++;
			}
			console.log("trouveAP"+trouve);
			console.log('memContactIndex='+memContactIndex);
			c.id=(this.tabloContact[memContactIndex]).id;
			c.prenom=(this.tabloContact[memContactIndex]).prenom;
			c.nom=(this.tabloContact[memContactIndex]).nom;
			return c;
	}


}


