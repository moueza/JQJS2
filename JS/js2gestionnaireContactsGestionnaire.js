function Gestionnaire(){
	
	this.tabloContact =[];



	this.getFromId=function(id){
			console.log("tabloContact="+this.tabloContact);
			var idString=""+id;
			console.log("idString="+idString);
			
			var c = new Contact();
			var trouve =false;
			var memContactIndex=0;
			var i=0;
			while((!trouve)&&(i<this.tabloContact.length)){
	          if (idString==(this.tabloContact[i].id)){
				memContactIndex=i;
	          }else{
	          	console.log('not found i='+i);
	          }
	          i++;
			}
			console.log('memContactIndex='+memContactIndex);
			c.id=(this.tabloContact[memContactIndex]).id;
			c.prenom=(this.tabloContact[memContactIndex]).prenom;
			c.nom=(this.tabloContact[memContactIndex]).nom;
			return c;
	}


}


