

var miAplicacion = angular.module("FerreteFacturacion", []);




miAplicacion.controller("control1", function($scope, $http){





$scope.valores={};



$scope.Sumar=function()
{
	var resultado=parseInt($scope.valores.num1) + parseInt($scope.valores.num2) + parseInt($scope.valores.num3);

	alert("El resultado es de " + resultado);





}

$scope.Promedio=function()
{
	var resultado=parseInt($scope.valores.num1) + parseInt($scope.valores.num2) + parseInt($scope.valores.num3);
	alert("El resultado es de " + (resultado/3));



}
$scope.PrecioFinal=function()
{

	var resultado=parseInt($scope.valores.num1) + parseInt($scope.valores.num2) + parseInt($scope.valores.num3);
	var iva=resultado*0.21;
	alert("El resultado es de " + (resultado + iva));

}

















});