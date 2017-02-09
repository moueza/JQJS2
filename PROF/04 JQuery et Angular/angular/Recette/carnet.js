function Recette(nom,ingredients,modeOp){
  this.nom= nom;
  this.ingredients= ingredients;
  this.modeOp=modeOp;
}

function Plat(type){
  this.type=type;
  this.nom;
  this.recette = null; //TODO : à gerer
}


function Repas(nom){
  this.nom = nom;
  this.lstPlats = [];

  // initialisation de tous les plat
  for (var i=0; i<man$lstPlats.length;i++){
    this.lstPlats.push(new Plat(man$lstPlats[i]))
  }
}

function Journee(date){
  this.date = date;
  this.lstRepas = [];

  // initialisation de tous les Repas
  for (var i=0; i<man$lstRepas.length;i++){
    this.lstRepas.push(new Repas(man$lstRepas[i]));
  }
}

function Carnet(){
  this.lstjournees = [];

  // intialisation du Carnet
  //man$calendrier.generate();
  for (var i = 0; i < man$calendrier.lstDates.length; i++) {
    this.lstjournees.push(new Journee(man$calendrier.lstDates[i]));
  }


}
