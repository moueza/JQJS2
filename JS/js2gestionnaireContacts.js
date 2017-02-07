

$(document).ready(function(){
	
	var g=new Gestionnaire();


	var contact1 =	 new Contact();
	var contact2 =	 new Contact();
	contact1.setContact("1","Peter","MOUEZA");
	contact2.setContact("2","Yves","DUPONT");

	
	g.tabloContact.push(contact1);	
	g.tabloContact.push(contact2);


	$(".pionCouleur").hover(function(){
		var id = $(".pionCouleur").attr("data-id");
		$(".pionCouleur").html("<ul><li>"+id+"</li> <li>"+ g.getFromId(id).prenom+"</li><li>"+g.getFromId(id).nom+"</li></ul>")
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