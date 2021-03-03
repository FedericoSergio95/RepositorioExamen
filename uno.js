/* Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/

function mostrar()
{

	//Declaro variables

	var i;
	var nombreProducto;
	var precioProducto;
	var cantidadUnidades;
	var tipoInflamable;
	var marcaProducto;

	var acumuladorIgnifugo = 0;
	var acumuladorCombustible =0;
	var acumuladorExplosivo =0;
	var totalIgnifugo;
	var totalCombustible;
	var totalExplosivo;
	var promedioIgnifugo;
	var promedioCombustible;
	var promedioExplosivo;
	var acumuladorIacBaratas =0;
	var productoMasCaro;
	var productoMasCaroMarca;
	var productoMasCaroTipo;

	//Asigno variables. Realizo carga de datos

	for (i = 0; i < 5; i++)
	{
		nombreProducto = prompt("Ingrese el nombre del producto: ALCOHOL, IAC o QUAT ");

		while (!(nombreProducto == "ALCOHOL" || nombreProducto == "IAC" || nombreProducto == "QUAT"))
		{
			alert("Ingresaste un nombre de producto no valido");
			nombreProducto = prompt("Ingrese el nombre del producto: ALCOHOL, IAC o QUAT ");
		}

		precioProducto = prompt("Ingrese el precio del prodcuto: entre 100 y 300");
		precioProducto = parseInt(precioProducto);
		
		while (precioProducto < 100 || precioProducto > 300)
		{
			alert("Ingresaste un precio de producto no valido");
			precioProducto = prompt("Ingrese el precio del prodcuto: entre 100 y 300");
		}

		cantidadUnidades = prompt("Ingrese la cantidad de unidades del producto: mayor a 0 y menor a 1000");
		cantidadUnidades = parseInt(cantidadUnidades);

		while (cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			alert("Ingresaste una cantidad de unidades de producto no valido");
			cantidadUnidades = prompt("Ingrese la cantidad de unidades del producto: mayor a 0 y menor a 1000");
		}

		tipoInflamable = prompt("Ingrese el tipo de producto: ignifugo, combustible o explosivo");

		while (!(tipoInflamable == "ignifugo" || tipoInflamable == "combustible" || tipoInflamable == "explosivo"))
		{
			alert("Ingresaste un tipo de producto no valido");
			tipoInflamable = prompt("Ingrese el tipo de producto: ignifugo, combustible o explosivo");
		}

		marcaProducto = prompt("Ingrese la marca del producto");

		//A

		if (tipoInflamable == "ignifugo")
		{
			totalIgnifugo = cantidadUnidades;

			if (totalIgnifugo != cantidadUnidades)
			{
				totalIgnifugo = (totalIgnifugo + cantidadUnidades);
			}

			acumuladorIgnifugo = acumuladorIgnifugo +1;
		}

		if (tipoInflamable == "combustible")
		{
			totalCombustible = cantidadUnidades;

			if (totalCombustible != cantidadUnidades)
			{
				totalCombustible = (totalCombustible + cantidadUnidades);
			}

			acumuladorCombustible = acumuladorCombustible +1;
		}

		if (tipoInflamable == "explosivo")
		{
			totalExplosivo = cantidadUnidades;

			if (totalExplosivo != cantidadUnidades)
			{
				totalExplosivo = (totalExplosivo + cantidadUnidades);
			}

			acumuladorExplosivo = acumuladorExplosivo +1;
		}

		//C

		if (nombreProducto == "IAC")
		{
			if (precioProducto < 201)
			{
				acumuladorIacBaratas = acumuladorIacBaratas +1;
			}
		}

		//D

		productoMasCaro = precioProducto;

		if (precioProducto > productoMasCaro)
		{
			productoMasCaro = precioProducto;
			productoMasCaroMarca = marcaProducto;
			productoMasCaroTipo = tipoInflamable;
		}

	}

		//A

		promedioIgnifugo = totalIgnifugo / acumuladorIgnifugo;
		promedioCombustible = totalCombustible / acumuladorCombustible;
		promedioExplosivo = totalExplosivo / acumuladorExplosivo;

		alert("El promedio del tipo ignifugo es de "+ promedioIgnifugo);
		alert("El promedio del tipo comvustible es de "+ promedioCombustible);
		alert("El promedio del tipo explosivo es de "+ promedioExplosivo);

		//B

		if(totalIgnifugo>totalCombustible && totalIgnifugo > totalExplosivo)
		{
    	alert ("La mayor cantidad que hay es de "+ totalIgnifugo);
		}
   		else if(totalCombustible>totalExplosivo && totalCombustible > totalIgnifugo)
    	{
        alert ("La mayor cantidad que hay es de " +totalCombustible);
    	}
    	else
    	{
        alert("La mayor cantidad que hay es de "+ totalExplosivo);
    	}

		//C

		if (acumuladorIacBaratas !=0)
		{
			alert("La cifra de unidades de IAC con precio menor a 200 vendidas fue de "+ acumuladorIacBaratas);
		}

		//D

		alert("El producto mas caro fue de marca "+ productoMasCaroMarca +" y del tipo "+ productoMasCaroTipo);
	
}
