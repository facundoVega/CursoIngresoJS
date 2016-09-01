var miAplicacion = angular.module("PiedraPapelTijera1", []);

miAplicacion.controller("miControl", function($scope, $http){







$scope.valores = {};









$scope.comenzar = function()
{
	$scope.valores.juego =  Math.round(Math.random() * (3 - 1) + 1);
	document.getElementById("jugada").src="imagenes/interrogacion.jpg" ;
	alert("empieza");
}

$scope.piedra = function()
{
	if($scope.valores.juego == 1)
	{

		document.getElementById("jugada").src ="imagenes/piedra.jpg";
		alert("Usted empato");

	}

	if($scope.valores.juego == 2)
	{

		document.getElementById("jugada").src = "imagenes/papel.jpg";
		alert("Usted perdio");

	}
	

	if($scope.valores.juego == 3)
	{

		document.getElementById("jugada").src = "imagenes/tijera.jpg";
		alert("Usted gano");
	}
	



}



$scope.papel = function()
{
	if($scope.valores.juego == 1)
	{

		document.getElementById("jugada").src ="imagenes/piedra.jpg";
		alert("Usted gano");
	}

	if($scope.valores.juego == 2)
	{

		document.getElementById("jugada").src = "imagenes/papel.jpg";
		alert("Usted empato");
	}
	

	if($scope.valores.juego == 3)
	{

		document.getElementById("jugada").src = "imagenes/tijera.jpg";
		alert("Usted perdio");
	}



}

$scope.tijera = function()
{
	if($scope.valores.juego == 1)
	{

		document.getElementById("jugada").src ="imagenes/piedra.jpg";
		alert("Usted perdio");
	}

	if($scope.valores.juego == 2)
	{

		document.getElementById("jugada").src = "imagenes/papel.jpg";
		alert("Usted gano");
	}
	

	if($scope.valores.juego == 3)
	{

		document.getElementById("jugada").src = "imagenes/tijera.jpg";
		alert("Usted empato");
	}





}











}); 