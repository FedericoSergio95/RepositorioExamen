/* Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas,
de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%,
que solo mostramos si corresponde.
*/

function mostrar()
{
	//Declaro variables

	var nombrePasajero;
	var estadoCivilPasajero;
	var edadPasajero;
	var temperaturaPasajero;
	var sexoPasajero;
	var continuar;

	var acumuladorViudosMayores =0;
	var edadMasJoven;
	var nombreMujerJovenSoltera;
	var edadMujerJovenSoltera;
	var acumuladorPasajeros =0;
	var precioTotalSinDescuento;
	var acumuladorPasajerosMayores =0;
	var promedioEdadPasajeros;
	var descuento = 0.15;
	var precioConDescuento;

	//Asigno variables. Realizo carga de datos

do
{
	nombrePasajero = prompt("Ingrese su nombre");

	estadoCivilPasajero = prompt("Ingrese su estado civil: soltero, casado o viudo");

	while (!(estadoCivilPasajero == "soltero" || estadoCivilPasajero == "casado" || estadoCivilPasajero =="viudo"))
      {
        alert("Ingresaste un estado civil no valido");
        estadoCivilPasajero = prompt("Ingrese su estado civil: soltero, casado o viudo");
      }

	edadPasajero = prompt("Ingrese su edad");
	edadPasajero = parseInt(edadPasajero);

	while (edadPasajero < 18)
      {
        alert("Ingresaste una edad no valida");
        edadPasajero = prompt("Ingrese su edad");
		edadPasajero = parseInt(edadPasajero);
      }
	
	temperaturaPasajero = prompt("Ingrese su temperatura corporal");
	temperaturaPasajero = parseInt(temperaturaPasajero);

	while (temperaturaPasajero < 5 || temperaturaPasajero > 50)
      {
        alert("Ingresaste una temperatura no valida");
        temperaturaPasajero = prompt("Ingrese su temperatura corporal");
		temperaturaPasajero = parseInt(temperaturaPasajero);
      }

	sexoPasajero = prompt("Ingrese su sexo: femenino, masculino o no binario");

	while (!(sexoPasajero == "femenino" || sexoPasajero == "masculino" || sexoPasajero =="no binario"))
      {
        alert("Ingresaste un sexo no valido");
        sexoPasajero = prompt("Ingrese su sexo: femenino, masculino o no binario");
      }

        continuar = confirm("Desea continuar?");

	//A

	if (estadoCivilPasajero == "viudo")
	{
		if (edadPasajero > 60)
		{
			acumuladorViudosMayores = acumuladorViudosMayores +1;
		}
	}

	//B

	if (sexoPasajero == "femenino")
	{
		if (estadoCivilPasajero == "soltero")
		{
			edadMasJoven = edadPasajero;
			nombreMujerJovenSoltera = nombrePasajero;
				edadMujerJovenSoltera = edadPasajero;

			if (edadMasJoven > edadPasajero)
			{
				edadMasJoven = edadPasajero;

				nombreMujerJovenSoltera = nombrePasajero;
				edadMujerJovenSoltera = edadPasajero;
			}
		}
	}

	//C

	acumuladorPasajeros = acumuladorPasajeros +1;

	//D

	if (edadPasajero > 60)
	{
		acumuladorPasajerosMayores = acumuladorPasajerosMayores +1;
	}

	} while (continuar==true);

	//A

	if (acumuladorViudosMayores != 0)
	{
		alert("La cantidad de personas con estado viudo de mas de 60 años es de "+ acumuladorViudosMayores);
	}

	//B

	if (nombreMujerJovenSoltera != " ")
	{
		alert("La mujer mas joven tiene "+ edadMujerJovenSoltera +" años y se llama "+ nombreMujerJovenSoltera);
	}

	//C

	precioTotalSinDescuento = 600 * acumuladorPasajeros;

	alert("El precio total del viaje sin descuento es de "+ precioTotalSinDescuento);

	//D 

	promedioEdadPasajeros = acumuladorPasajeros / acumuladorPasajerosMayores;

	if (promedioEdadPasajeros > 1)
	{
		precioConDescuento = (600 * acumuladorPasajeros) - (600 * acumuladorPasajeros)* descuento;

		alert("El precio con descuento es de "+ precioConDescuento);
	}

	
}
