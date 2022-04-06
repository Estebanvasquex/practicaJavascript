
console.log("******************EJERCICIO 1******************")


/* Deberás escribir un objeto literal llamado estudiante que contenga las siguientes propiedades que deberás completar con tus datos:
 */

let estudiante = {

    nombre: "Esteban",
    apellido: "Vásquez",
    camada: 4,
    esParcial: "(VERDADERO)"

}



/* 2.  Crear una función que, pasado un número entero (la futura nota), nos devuelva la situación del alumno: 
	 NOTA < 4 :           desaprobado
 4 <= NOTA < 7 :  debe rendir examen final 
	 NOTA >= 7 :         promocionado.  
La función deberá retornar la condición final del alumno (solo retorna la palabra). 
Al momento de llamar a la función, deberás mostrar la siguiente frase: 
	“El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]” 
 */



function situacion(nota){
    let condicionFinal=" ";

    if(nota<4){
        condicionFinal = "DESAPROBADO";
    }
    else if (nota > 7){
        condicionFinal = "PROMOCIONADO";
 
    }
    else if (nota >= 4 && nota < 7){
        condicionFinal = "DEBE RENDIR EXAMEN FINAL";
    }

return (`"El alumno obtuvo una nota igual a  [${nota}]  por lo tanto su condición es [${condicionFinal}]"`);

}

let guardaSituacion = situacion(8);
console.log(guardaSituacion);


console.log("******************EJERCICIO 2******************")


/* Ejercicio 2:
Crea 1 array llamado clase.  
Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3 compañeros. 
Ej: Esteban Piazza 1 - Leandro Borrelli 1 - Martín Cejas 1
Agrega estos 3 objetos al array llamado clase.
Imprimir el array para ver que contenga esos objetos.
Crea una función que reciba el array clase como parámetro e incremente en 1 el número de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una estructura de repetición. 
Deberás hacer el correcto llamado de la función mostrando el array clase antes y después de llamar a siguienteCursada. 
 */

const clase = [
    {
        nombre: "Esteban",
        apellidos: "Piazza",
        bimestre: 1
    },

    {
        nombre: "Leandro",
        apellidos: "Borrelli",
        bimestre: 1

    },

    {
        nombre: "Martín",
        apellidos: "Cejas",
        bimestre: 1

    }
]

console.log(clase)

function siguienteCursada (array){

    let j = 0;
    while(j<=2){
       array[j].bimestre = array[j].bimestre + 1;
       j++;
    }

    console.log(array);

/* 
    for(i in array){
        array[i].bimestre = array[i].bimestre + 1;
    }
    console.log(array); */


/*      for(let i=0; i<=array.length; i++){
        array[i].bimestre = array[i].bimestre + 1;
     }
     console.log(array); */ 


}

siguienteCursada (clase);


console.log("******************EJERCICIO 3******************")


/*Ejercicio 3:

1. Crear una función que apruebe o desapruebe alumnos en base a su asistencia y a su progreso completo en PlayGround (true, false). Para ello deberán: 
Crear una constante asistenciaMinima que almacene el número mínimo de asistencias permitidas para la aprobación de la materia, en este caso serán 23 asistencias mínimas. 
La función deberá recibir como parámetros la cantidad de asistencias  y la condición final ante PlayGround (true o false) del alumno.
Un alumno, será aprobado si tiene la cantidad de asistencias mínima y su progreso final está completo. Si alguna de estas opciones no se cumple, el alumno será automáticamente desaprobado. 
Deberá retornar un string aprobado o desaprobado según corresponda */



function final(asistencia, playGround){

    const asistenciaMinima = 23;

        if(asistencia >= asistenciaMinima && playGround === true){
            return "APROBADO"

        }
        else{
            return "DESAPROBADO"
        }
}

let guardaFinal = final (24,true);
console.log(guardaFinal);
