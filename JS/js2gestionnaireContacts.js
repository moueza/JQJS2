
	var tabloContact =[];

	this.getFromId=function(id){
		var idString=""+id;
		console.log("idString="+idString);
		var memContactIndex;
		var c = new Contact();
		var trouve =false;
		i=0;
		while((!trouve)&&(i<tabloContact.length)){
          if (idString==(tabloContact[i].id)){
			memContactIndex=i;
          }else{
          	console.log('not found i='+i);
          }
          i++;
		}
		c.id=tabloContact[memContactIndex].id;
		c.prenom=tabloContact[memContactIndex].prenom;
		c.nom=tabloContact[memContactIndex].nom;
		return c;
	}

$(document).ready(function(){




	var contact1 =	 new Contact();
	var contact2 =	 new Contact();
	contact1.setContact("1","Peter","MOUEZA");
	contact2.setContact("2","Yves","DUPONT");

	
	tabloContact.push(contact1);	
	tabloContact.push(contact2);


	$(".pionCouleur").hover(function(){
		var id = $(".pionCouleur").attr("data-id");
		$(".pionCouleur").html("<ul><li>"+id+"</li> <li>"+ getFromId(id).prenom+"</li><li>"+getFromId(id).nom+"</li></ul>")
	});







	var tablePoub="";
	tablePoub+='<tr><td>'
						+'<a id="valider" href="#">'
		              		+'<span>'
		              			+'Valider'
							+'</span>'
						+'</a>'
				  	+'</td>'
				+'</tr>'
	            +'<tr><td>'
			            +'<a id="effacer" href="#">'
				              		+'<span>'
				              			+'Effacer'
									+'</span>'
						+'</a>'
	            	+'</td>'
	            +'</tr>';

	$("#tableauDesTouches").html(tablePoub);		





	var table5454="";
	var res = new Res();







	$("#pionvert").click(function(){
		console.log("pionvert");
									   }
	);

	$("#pionbleu").click(function(){
		console.log("pionbleu");
										   }
	);

	$("#pionjaune").click(function(){
		console.log("pionjaune");
										   }
	);

	$("#pionrouge").click(function(){
		console.log("pionrouge");
										   }
	);


	$(".pionCouleur").click(function(){
		console.log("pion couleur.  ");
									   }
	);


});