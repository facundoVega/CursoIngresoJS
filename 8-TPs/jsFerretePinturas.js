
var miAplicacion = angular.module("FerretePinturas", []);


miAplicacion.controller("miControl", function($scope, $http){









	$scope.valor={};



	$scope.FahrenheitCentigrados=function()
	{

		alert($scope.valor.Temperatura + " Fahrenheit son " + (parseInt($scope.valor.Temperatura)-32 ) + "grados centigrados");


	}


	$scope.CentigradosFahrenheit=function()
	{

		alert($scope.valor.Temperatura + " grados centigrados son " + (parseInt($scope.valor.Temperatura)+32 ) + "Fahrenheit");	


	}



});