

$(document).ready(function(){
	
	var g=new Gestionnaire();


	var saveeHtml;
	$(".pionCouleur").hover(function(){
		saveeHtml= $(".pionCouleur").html();
		var id = $(this).children("div").prop("data-id");
		console.log("idButton="+id);
		$(".pionCouleur").html('<div id="contactt"><ul><li>'+id+'</li> <li>'+ g.getFromId(id).prenom+'</li><li>'+g.getFromId(id).nom+'</li></ul></div>');
		console.log("this .anchor="+this+ " .anchor");
		$(this).children(" .anchor").hide();
		console.log("$(this).children .anchor role="+$(this).prop("role"));
		$(this).children(" #contactt").show();

	},function(){
		$(this).children(" .anchor").show();
		$(this).children(" #contactt").hide();
		console.log("$this="+$(this));
		
	});



	var table5454="";
	var res = new Res();





});