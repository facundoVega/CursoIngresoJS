var miAplicacion = angular.module("AdivinaElNumero2", []);


miAplicacion.controller("control", function($scope, $http){




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
			

			switch($scope.valores.intentos)
			{
				case 1:
					alert("Usted es psiquico");
					break

				case 2:
					alert("Excelente percepcion");
					break

				case 3:
					alert("esto es suerte");
					break

				case 4:
					alert("Excelente tecnica");
					break
				case 5:
					alert("Usted esta en la media");
					break

			}
			if($scope.valores.intentos > 5 && $scope.valores.intentos <=10)
			{
				alert("falta tecnica");

			}
			if($scope.valores.intentos > 10 )
			{
				alert("afortunado en el amor");

			}
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