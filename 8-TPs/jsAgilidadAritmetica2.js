var miAplicacion = angular.module("AgilidadAritmetica2", []);

miAplicacion.controller("miControl", function($scope, $http){







$scope.valores = {};
var resultado;
var temp;






$scope.Comenzar = function()
{



	$scope.valores.num1 = Math.round(Math.random() * (10 - 1) + 1);
	
	var operador = Math.round(Math.random() * (4- 1) + 1);

	switch(operador)
	{
		case 1:
			$scope.valores.operador = '+';
			break

		case 2:
			 $scope.valores.operador = '-';
			break

		case 3:
			 $scope.valores.operador = 'x';
			break

		case 4:
			 $scope.valores.operador = '%';
			break


	}
	$scope.valores.num2 = Math.round(Math.random() * (10 - 1) + 1);
	temp=setTimeout(Fin, 4000);


}

$scope.Responder = function()
{

	
	switch($scope.valores.operador)
	{
		case '+':
			resultado = parseInt($scope.valores.num1) + parseInt($scope.valores.num2);
			break

		case '-':
			resultado = parseInt($scope.valores.num1) - parseInt($scope.valores.num2);
			break

		case 'x':
			resultado = parseInt($scope.valores.num1) * parseInt($scope.valores.num2);
			break

		case '%':
			resultado = parseInt($scope.valores.num1) / parseInt($scope.valores.num2);
			break
	} 

	if(resultado == parseInt($scope.valores.respuesta))
	{


		alert("su respuesta es correcta");
		clearTimeout(temp);
		$scope.valores.num1="";
		$scope.valores.num2="";
		$scope.valores.operador="";
		$scope.valores.respuesta="";
	}
	else
	{
		alert("su respuesta es incorrecta");

	}


}



function Fin()
{
	switch($scope.valores.operador)
	{
		case '+':
			resultado = parseInt($scope.valores.num1) + parseInt($scope.valores.num2);
			break

		case '-':
			resultado = parseInt($scope.valores.num1) - parseInt($scope.valores.num2);
			break

		case 'x':
			resultado = parseInt($scope.valores.num1) * parseInt($scope.valores.num2);
			break

		case '%':
			resultado = parseInt($scope.valores.num1) / parseInt($scope.valores.num2);
			break
	} 
	$scope.valores.num1 = "";
		$scope.valores.num2 = "";
		$scope.valores.operador = "";
		$scope.valores.respuesta = "";

	alert("fin del juego el resultado es :" + resultado);

		


}








});