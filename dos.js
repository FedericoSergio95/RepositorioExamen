/* Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA,
los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota
*/

function mostrar()
{
  //declaro variables

  var nombre;
  var tipoCursada;
  var cantidadMaterias;
  var sexo;
  var notaPromedio;
  var edad;
  var continuar;

  var promedioMasAlto;
  var mejorPromedioNoMasculino;
  var nombreMasJoven;
  var edadMasJovenLibre;
  var totalNotaMasculino;
  var promedioMasculino;
  var acumuladorMasculino =0;
  var totalNotaFemenino;
  var promedioFemenino;
  var acumuladorFemenino =0;
  var totalNotaNoBinario;
  var promedioNoBinario;
  var acumuladorNoBinario =0;


  //Asigno variables. Realizo carga de datos

  do
  {
    nombre = prompt("Ingrese su nombre");

    tipoCursada = prompt("Ingrese su tipo de cursada: libre, presencial o remota");

    while (!(tipoCursada == "libre" || tipoCursada == "presencial" || tipoCursada =="remota"))
      {
        alert("Ingresaste un tipo de cursada no valido");
        tipoCursada = prompt("Ingrese su tipo de cursada: libre, presencial o remota");
      }

    cantidadMaterias = prompt("Ingrese cantidad de materias solicitadas: mayor a 0 y menor a 8");
    cantidadMaterias = parseInt(cantidadMaterias);

    while (cantidadMaterias <1 || cantidadMaterias >8)
    {
      alert("Ingresaste una cantidad de materias no valido");
      cantidadMaterias = prompt("Ingrese cantidad de materias solicitadas: mayor a 0 y menor a 8");
    }

    sexo = prompt("Ingrese su sexo: femenino, masculino o no binario");

    while (!(sexo == "femenino" || sexo == "masculino" || sexo =="no binario"))
      {
        alert("Ingresaste un sexo no valido");
        sexo = prompt("Ingrese su sexo: femenino, masculino o no binario");
      }

      notaPromedio = prompt("Ingrese su nota promedio: entre 0 y 10");
      notaPromedio = parseInt(notaPromedio);

      while (notaPromedio <0 || notaPromedio >10)
    {
      alert("Ingresaste una nota de promedio no valido");
      notaPromedio = prompt("Ingrese su nota promedio: entre 0 y 10");
    }

      edad = prompt("Ingrese su edad");
      edad = parseInt(edad);

      while (edad <0 || edad >99)
      {
        alert("Ingresaste una edad no valida");
        edad = prompt("Ingrese su edad");
      }

      //A

      if (sexo != "masculino")
      {
          promedioMasAlto = notaPromedio;
          if (notaPromedio > promedioMasAlto)
          {
          promedioMasAlto = notaPromedio;
          mejorPromedioNoMasculino = nombre; 
          }
      }

      //B

      if (tipoCursada == "libre")
      {
        edadMasJovenLibre = edad;
        if (edad < edadMasJovenLibre)
        {
          edadMasJovenLibre = edad;
          nombreMasJoven = nombre;
        }
      }
      
      //D

      if (sexo == "masculino")
      {
        totalNotaMasculino = notaPromedio;
        acumuladorMasculino = acumuladorMasculino +1;

        if (totalNotaMasculino != notaPromedio)
        {
          totalNotaMasculino = totalNotaMasculino + notaPromedio;

        }
      }

      if (sexo == "femenino")
      {
        totalNotaFemenino = notaPromedio;
        acumuladorFemenino = acumuladorFemenino +1;

        if (totalNotaFemenino != notaPromedio)
        {
          totalNotaFemenino = totalNotaFemenino + notaPromedio;
          
        }
      }

      if (sexo == "no binario")
      {
        totalNotaNoBinario = notaPromedio;
        acumuladorNoBinario = acumuladorNoBinario +1;

        if (totalNotaNoBinario != notaPromedio)
        {
          totalNotaNoBinario = totalNotaNoBinario + notaPromedio;
          
        }
      }

    continuar = confirm("Desea continuar?");

  }while (continuar==true)

  //A

  alert("El mejor promedio no masculino es el de "+ mejorPromedioNoMasculino);

  //B

  alert("El nombre del alumno mas joven que rinde libre es "+ nombreMasJoven);

  //D

  promedioFemenino = totalNotaFemenino / acumuladorFemenino;
  promedioMasculino = totalNotaMasculino / acumuladorMasculino;
  promedioNoBinario = totalNotaNoBinario / acumuladorNoBinario;

  alert("El promedio de nota femenino es de "+ promedioFemenino +" ,el promedio masculino es de "+ promedioMasculino + " y el promedio no binario es de "+ promedioNoBinario);

}
