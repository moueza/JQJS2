man$calendrier = {
  BASE_DATE : "01/01/2016", // TODO : à prendre en compte pour la suite
  lstDates : [],
  generate : function(){
    this.lstDates.push(new Date());
    for (var i = 1; i < 10; i++) {
        var d=new Date();
        d.setDate(this.lstDates[i-1].getDate() + 1);
        this.lstDates.push(d);
    }
  }
}
