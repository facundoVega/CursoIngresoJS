var miAplicacion = angular.module("PiedraPapelTijera2", []);

miAplicacion.controller("miControl", function($scope, $http){







$scope.valores = {};



$scope.valores.empates = 0;
$scope.valores.perdidas = 0;
$scope.valores.ganadas= 0;




$scope.comenzar = function()
{
	$scope.valores.juego =  Math.round(Math.random() * (3 - 1) + 1);
	document.getElementById("jugada").src="imagenes/interrogacion.jpg" ;
	alert("empieza");
}

$scope.piedra = function()
{
	$scope.valores.juego =  Math.round(Math.random() * (3 - 1) + 1);

	if($scope.valores.juego == 1)
	{

		$scope.valores.empates++;
		alert("La maquina eligio piedra Usted empato");

	}

	if($scope.valores.juego == 2)
	{

		
		alert("La maquina eligio papel Usted perdio");
		$scope.valores.perdidas++;
	}
	

	if($scope.valores.juego == 3)
	{

		$scope.valores.ganadas++;

		alert("La maquina eligio tijera Usted gano");
	}
	



}



$scope.papel = function()
{
	$scope.valores.juego =  Math.round(Math.random() * (3 - 1) + 1);
	if($scope.valores.juego == 1)
	{

		$scope.valores.ganadas++;
		alert("La maquina eligio : piedra Usted gano");
	}

	if($scope.valores.juego == 2)
	{

		$scope.valores.empates++;
		alert("La maquina eligio papel Usted empato");
	}
	

	if($scope.valores.juego == 3)
	{

		$scope.valores.perdidas++;
		alert("La maquina eligio tijera Usted perdio");
	}



}

$scope.tijera = function()
{
	$scope.valores.juego =  Math.round(Math.random() * (3 - 1) + 1);
	if($scope.valores.juego == 1)
	{

		$scope.valores.perdidas++;
		alert("La maquina eligio piedra Usted perdio");
	}

	if($scope.valores.juego == 2)
	{

		$scope.valores.ganadas++;
		alert("La maquina eligio papel Usted gano");
	}
	

	if($scope.valores.juego == 3)
	{

		$scope.valores.empates++;
		alert("La maquina eligio tijera Usted empato");
	}





}











}); 