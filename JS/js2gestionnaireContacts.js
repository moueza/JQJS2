
	var tabloContact =[];

	this.getFromId=function(id){
		var idString=""+id;
		console.log("idString="+idString);
		var memContactIndex;
		var c = new Contact();
		i=0;
		while((!trouve)&&(i<tabloContact.length)){
          if (idString==(tabloContact[i].id){
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



	$("#valider").click(function(){
			console.log("valider");
			jeu.trippedpropositionCourante=[];
			for(var caseOf4=0;caseOf4<4;caseOf4++){
					jeu.trippedpropositionCourante[caseOf4]=jeu.propositionCourante[jeu.propositionCourante.length-1-3];
			}
			console.log("jeu.propositionCourante="+jeu.propositionCourante);
			console.log("trippedpropositionCourante="+jeu.trippedpropositionCourante);
			table5454+=	'<tr><td>'+jeu.trippedpropositionCourante[0]+'</td><td>'+jeu.trippedpropositionCourante[1]+'</td><td>'+jeu.trippedpropositionCourante[2]+'</td><td>'+jeu.trippedpropositionCourante[3]+'</td></tr>';   
			console.log('table5454='+table5454);
			$("#grosTablo").html(table5454);	

			var l1=new Ligne(jeu.propositionCourante);
			var l2=new Ligne(jeu.ligneAlea);

			res=jeu.comparer2lignes(l1,l2);
			console.log("res.length="+res.length);
			console.log("res.indices="+res.indices);
			


		    jeu.propositionCourante=[];
		    trippedpropositionCourante=[];
		    jeu.size=0;
								   }
	);

	




	$("#effacer").click(function(){
	console.log("effacer");
	jeu.propositionCourante=[];
								   }
	);

	


	$("#pionvert").click(function(){
		console.log("pionvert");
		jeu.propositionCourante[jeu.propositionCourante.length]=jeu.couleur[0];
								   }
	);

	$("#pionbleu").click(function(){
		console.log("pionbleu");
		jeu.propositionCourante[jeu.propositionCourante.length]=jeu.couleur[2];
								   }
	);

	$("#pionjaune").click(function(){
		console.log("pionjaune");
		jeu.propositionCourante[jeu.propositionCourante.length]=jeu.couleur[1];
								   }
	);

	$("#pionrouge").click(function(){
		console.log("pionrouge");
		jeu.propositionCourante[jeu.propositionCourante.length]=jeu.couleur[3];
								   }
	);


	$(".pionCouleur").click(function(){
		console.log("pion couleur.  ");
		//jeu.propositionCourante[jeu.propositionCourante.length]=jeu.couleur[0];
		jeu.afficherCourant();
								   }
	);


});