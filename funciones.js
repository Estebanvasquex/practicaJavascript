const prompt = require("prompt-sync")({ sigint: true });

// Funntions:  agrupa uno o varios procedimientos que se ejecutan cuando sea necesario, hay dos tipos, Declarada: recibe nombre normal y no se asigna a una variable
// Expresada: se asigna como valor a una variable

// Arrow funcionts: son muy usadas y se utilizan para simplificar el código, no es necesatio poner la palabra funtion, el return ni las llaves, se debe asignarla como valor de una variable, cuando la arrow funtions solo recibe un parametro no es necesario ponerlo entre parentesis, de lo contrario si y cuando tiene varias sentencias de código a ejecutar si será necesrio agregar llaves y la palabra retur
// ejemplo:








/* console.log("-----------Ejercicios con funciones-----------")

let suma = num1 => num1+29;

console.log(suma(19));
 */

/* Arrow funtion con varios parametros*/
/* let variosParametros = (numero1, numero2) => numero1+numero2;

console.log(variosParametros(34,65))
 */


/* Arrow funtion con varios instrucciones */

/* let esPar = numero => {
    if(numero % 2 === 0){
        return true;
    }
    return false;
}

console.log(esPar(198));
 */





/* EJERCISIOS ARROW FUNTIONS */

// En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso por consola de los valores-


/* console.log("EJERCICIO 1");

let pulg = prompt("Ingrece las pulgadas1: ")
let pulCen = pulg => pulg * 2.5;

console.log(pulCen(pulg))
 */

/* Opción2 */

/* console.log("----------------opción2-------------------");

let centimetros = (pulgadas=prompt("ingrese las pulgadas: ")) => pulgadas * 2.5;
 */
/* 
console.log(centimetros());
 */






/* 
console.log("EJERCICIO 2");
 */
// 2. Crear una función que recibe un string y lo convierte en una URL. 
// Ej: “pepito” es devuelto como “http://www.pepito.com”

/* let url = (dominio=prompt("INGRESA LA PALABRA PARA CONVERTIR EN DOMINIO: ")) => "wwww."+dominio+".com";

console.log(url());
 */

/* console.log("----------------opción2-------------------");
 */
/* opción 2 */

/* function url2(nombre){
    return `"http:/www.${nombre}.com"`
}

console.log(url2(prompt("Ingresa el nombre: ")))


 */







// 3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.

/* function url2(nombre){
    return `"http:/www.${nombre}.com"`
}

console.log(url2(prompt("Ingresa el nombre: ")))










*/
// 4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
 
/* let edadPerro = ( edad = prompt ("INGRESAR EDAD PERRO: ")) => edad * 7;


console.log(edadPerro()) 
 */







// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. PD: considerá que tu mes de trabajo tiene 40 horas.

/* 
let valorHora = ( salario = prompt ("INGRESAR SALARIO: ")) => console.log(`el valor de la hora es: ${salario / 40} `);
 */

/* console.log(valorHora()) 
 */


// 2






// 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores. Seleccionar alguna de estas funciones —o de manera opcional, todas— y escribirla como función expresada y función flecha.



/* let imc = (altura, peso) => console.log(`El indice de masa corporal es: ${peso / (altura*altura)}`) 

console.log(imc(prompt("ingresa altura: "), prompt("ingresa peso: ")))
 */






// Si llegamos hasta este punto estamos más que satisfechos. Ahora te dejamos unos ejercicios con una dificultad extra, tendrás que buscar algunos conceptos para poder resolverlos. Es una práctica que los programadores realizamos todos los días. Como siempre te decimos, una parte importante del aprendizaje en programación es ignorar la complejidad, e ir estrictamente a lo que necesitamos. Sabemos que no es una práctica fácil de realizar, pero con el tiempo va a ir haciéndose más sencilla y divertida.




// 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. Investigá qué hace el método de strings .toUpperCase()


/* let mayuscula = (palabra = prompt("INGRESA EL STRING: ")) => console.log(palabra.toUpperCase())

mayuscula()
 */








// 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. Pista: te servirá revisar qué hace la palabra reservada typeof.


/* CON ESTE CODIGO SIEMPRE SALE STRING*/ 
 /*let tipoDato = (dato = prompt("ingresa el dato:"))  => console.log(`EL TIPO DE DATO ES: ${typeof (dato)}`) */ 

/* let dato = prompt("INGRESA EL DATO: ");

let tipoDato = dato => console.log(`EL TIPO DE DATO ES: ${typeof (dato)}`) 

console.log(tipoDato(5));
 */








// 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi. FORMULA P=2πR


/* const calcularPi = Math.PI

let circunferencia = (radio = prompt("INGRESA EL RADIO: ")) => console.log(`la circunferencia o perimetro es: ${2*calcularPi*radio}`)


console.log(circunferencia());
 */

let num1 = -7;
let num2 = 8;

console.log(4 == 3)
