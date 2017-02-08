


var app = angular.module("app", []);
app.controller("myController", function($scope){
// ça commence là
    $scope.showContent = true;
	var d = new Date();
	
	$scope.array10tablo=[];
	$scope.array12tablo=[];
	$scope.array31tablo=[];

	$scope.showRepas=false;





   /**years*/
 	$scope.array10=function(){
 	 	var array10tab=[];//!!!!!
 	 
 	 	for(var i=2010;i<=2020;i++){
 	 		//console.log("i="+i.toString()+" "+array31tab);

 	 		array10tab.push(i);
 	 		//console.log("i="+i.toString()+" "+array31tab.toString());
 	 	}
 	 	$scope.array10tablo=array10tab;
 	 	return array10tab;
  	}


	/**months*/
 	$scope.array12=function(){
 	 	var array12tab=[];//!!!!!
 	 
 	 	for(var i=0;i<=11;i++){
 	 		//console.log("i="+i.toString()+" "+array11tab);

 	 		array12tab.push(i);
 	 		//console.log("i="+i.toString()+" "+array31tab.toString());
 	 	}
 	 	$scope.array12tablo=array12tab;
 	 	return array12tab;
  	}







   /**days*/
 	$scope.array31=function(){
 	 	var array31tab=[];//!!!!!
 	 
 	 	for(var i=0;i<=30;i++){
 	 		console.log("i="+i.toString()+" "+array31tab);

 	 		array31tab.push(i);
 	 		console.log("i="+i.toString()+" "+array31tab.toString());
 	 	}
 	 	$scope.array31tablo=array31tab;
 	 	return array31tab;
  	}


    $scope.dateeFunc = function(){
	    console.log('in dateeFunc');
	    d.setDate();	
		$scope.datee= $scope.dateeY +" "+ $scope.dateeM +" " + $scope.dateeD;

		$scope.showRepas=true;
	}

});
