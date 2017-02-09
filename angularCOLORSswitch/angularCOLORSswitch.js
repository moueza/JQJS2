var app = angular.module("app", []);




function OrderHTML(){
	this.order;	
	this.html="";
}








app.controller("myController", function($scope){
// ça commence là
        $scope.tablo = $scope.generateTablo();
 	$scope.generateTablo();
 	$scope.tabloDecoupe=[];

 	oh0=new OrderHTML();
 	oh1=new OrderHTML();
 	oh2=new OrderHTML();
 	oh3=new OrderHTML();
	$scope.tableauOrderHtml= function(){
    

    }

    /**genere tableau HTML initial*/
    $scope.generateTablo = function(){
    	 var table ="<table>";
    	 var i=0;
         while(i<=4){
         		 var ligneModel='<td  ng-click="clik()" id="case'+i+'  style="background-color="></td>';
	             table+= ligneModel;
	             i++;
       	}
        table+= '</table>';
        return table;

    }




	/**echange case 0 av case cliquee*/
     $scope.switchWith=function(){

     }

    $scope.clik = function(){
    	
     	$scope.switchWith();
    }



    $scope.tablo=[];
 

       


// ça se termine là
});


