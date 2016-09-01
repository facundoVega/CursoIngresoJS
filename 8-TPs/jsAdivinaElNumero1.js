var miAplicacion= angular.module("AdivinaElNumero1", []);


miAplicacion.controller("miControl", function($scope, $http){





 
	$scope.valores={};

	$scope.valores.intentos;
	$scope.valores.aleatorio; 






	$scope.comenzar=function()
	{
		$scope.valores.aleatorio = Math.floor(Math.random()*100);
		$scope.valores.numero = "";
		$scope.valores.intentos = 0;
		alert("Comienza");

	}

	$scope.verificar=function()
	{

		$scope.valores.intentos++;

		if(parseInt($scope.valores.numero) == $scope.valores.aleatorio)
		{


			alert("USTED ES UN GANADOR Y EN SOLO  " + $scope.valores.intentos + "intentos");
			$scope.valores.numero = "";
			$scope.valores.intentos = "";
			$scope.valores.aleatorio = Math.floor(Math.random()*10);

		}
		else
		{

			if(parseInt($scope.valores.numero) > $scope.valores.aleatorio)
			{


				alert("se paso ...");
			}

			if(parseInt($scope.valores.numero) < $scope.valores.aleatorio)
			{


				alert("falta para llegar al numero");
			}


		}

		
	}



});