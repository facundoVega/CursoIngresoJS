
var miAplicacion= angular.module("FerreteIluminacion", []);

miAplicacion.controller("miControl", function($scope, $http){



	$scope.datos={};


	$scope.datos.Marca="ArgentinaLuz";




	$scope.CalcularPrecio=function()
	{

		var cantidad=parseInt($scope.datos.Cantidad);

		var importe=cantidad*35;
		var descuento;

		if(cantidad >= 6)
		{

				descuento=importe/2;


		}
		if(cantidad == 5)
		{


			if($scope.datos.Marca == "ArgentinaLuz")
			{

				descuento=importe*0.4;
			}
			else
			{

				descuento=importe*0.3;
			}
		}

		if(cantidad == 4)
		{

			if($scope.datos.Marca == "ArgentinaLuz" || $scope.datos.Marca == "FelipeLamparas")
			{


				descuento = importe * 0.25;
			}
			else
			{
				descuento = importe * 0.20;

			}

		}


		if(cantidad == 3)
		{


			if($scope.datos.Marca == "ArgentinaLuz")
			{
				descuento = importe * 0.15;
			}

			if($scope.datos.Marca == "FelipeLamparas")
			{
				descuento = importe * 0.10;
			}

			if($scope.datos.Marca != "FelipeLamparas" && $scope.datos.Marca != "ArgentinaLuz")
			{


				descuento= importe *0.05;
			}

		}


		importe= importe - descuento;
		$scope.datos.precioDescuento=importe;

		var aumento=0;
		var mensaje="";
		if(importe > 120)
		{


			aumento= importe *0.1;
			importe=importe + aumento;
			mensaje="siendo $" + aumento + "el aumento";
		}

		alert("LLBB USTED PAGO $" + importe + mensaje); 


		
	}




	







});