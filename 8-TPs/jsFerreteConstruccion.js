
var miAplicacion = angular.module("FerreteConstruccion", []);


miAplicacion.controller("miControl", function($scope, $http){





$scope.valores={};





$scope.Rectangulo = function()
{
	var cantidadAlambre=parseInt($scope.valores.Largo)* 2 + parseInt($scope.valores.Ancho)* 2;


	alert("Debe comprar " + cantidadAlambre*3 +"mts de alambre");




}

$scope.Circulo = function()
{
	var resultado=parseInt($scope.valores.radio) * 2 * 3.14;
	alert("Debe comprar "+ ((resultado * 3).toFixed(2)) + " mts de alambre para la superficie circular");




}

$scope.Materiales = function()
{


	var area = parseInt($scope.valores.Largo) * parseInt($scope.valores.Ancho);

	var bolsasCemento=area * 2;
	var bolsasCal = area * 3;

	alert("Necesitara " + bolsasCemento + "bolsas de cemento y " + bolsasCal + "bolsas de cal para el contrapiso");


}








}); 