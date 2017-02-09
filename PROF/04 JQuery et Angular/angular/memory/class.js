/*
*	Représente une carte
*/
function Carte(valeur){
	this.valeur = valeur;
	this.cote = "verso";
}

/*
*	Représente une grille de jeu
*/
function Grille(){
	this.lstCartes = [];
	this.cptRecto = 0;
	this.cptVide=0;
	this.toLock=[];
	this.toReturn=[];

	// initialisation de la grille
	this.lstCartes.push(new Carte(1));
	this.lstCartes.push(new Carte(2));
	this.lstCartes.push(new Carte(1));
	this.lstCartes.push(new Carte(3));
	this.lstCartes.push(new Carte(4));
	this.lstCartes.push(new Carte(3));
	this.lstCartes.push(new Carte(4));
	this.lstCartes.push(new Carte(2));

	// Gestion du click
	this.click = function(id){

		// Il y a des cartes à sortir du jeux car gagnées au click précédent
		if(this.toLock.length == 2){
			//vider les 2 dern retrouvees
			console.log("lbl if1");
			this.toLock[0].cote="vide";
			this.toLock[1].cote="vide";
			//this.toLock=[]; //cf influence sur vue ?
			this.cptVide+=2;
			this.cptRecto=0;
		}

		// Il y a des cartes à retourner car perdues au tour précédent
		else if(this.toReturn.length == 2){
			console.log("lbl if2");
			this.toReturn[0].cote="verso";
			this.toReturn[1].cote="verso";
			//this.toReturn=[];
			this.cptRecto=0;
		}

		// Inversion de coté de la carte cliquée
		else if(this.lstCartes[id].cote=="verso"){
			console.log("lbl if3");
			this.cptRecto++;
			this.lstCartes[id].cote="recto";
		}
		else{//tape une carte recto
			console.log("lbl if4");
			this.cptRecto--;
			this.lstCartes[id].cote="verso";
		}
	}

	/** Gestion de deux cartes retournées
	from script.js $scope.$watch('grille.cptRecto*/
	this.gestionDuDeux = function(){
		console.log("in gestionDuDeux");
		var tmp=[];//les cartes valeur = les cartes revelees
		for (var i = 0; i < this.lstCartes.length; i++) {
			var carte = this.lstCartes[i];
			if(carte.cote=="recto"){
				tmp.push(carte);
			}
		console.log('nb rectos='+i);
		}
		console.log("for if");
		if(tmp[0].valeur == tmp[1].valeur){
			console.log("for if OK");
			console.log("class.js class lbl15 valeur="+ tmp[0].valeur);
			this.toLock = tmp;//vider les 2 dern retrouvees
		}
		else{//les recacher
			console.log("for else");
			this.toReturn = tmp;
		}
	}
}
