const prompt = require("prompt-sync")({ sigint: true });

/* Ejercicio 1
Loop de pares
Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.
 */
/* function loopDepares(numero){ */
    
// function loopDePares(numero){
//     for(i=0; i<=100; i++){
//     console.log("El número es: " + i);
//     let caja1 = numero+i;

//     if(caja1 % 2 === 0){
//         console.log(`"EL NÚMERO ${i} ES PAR"`);
//     }
// }
// }

// loopDePares(15);

/* Ejercicio2
Loop de impares con palabra
Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro */



/* function loopDeImPares(numero, palabra){
    for(i=0; i<=100; i++){
    console.log("El número es: " + i);
    let caja1 = numero+i;

    if(caja1 % 2 != 0){
        console.log(`"Esta fue la palabra ingresada ( ${palabra} ) el número es impar"`);
    }
}
}

loopDeImPares(15, "esteban"); */



/* Ejercicio 3
Sumatoria
Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
sumatoria(3) debe retornar 6 porque hace (1+2+3)
sumatoria(8) debe retornar 36 */

/* function sumatoria(numero){

    let caja= 0;

    for(i=1; i<=numero; i++){
               caja=caja+i; 
    }
    console.log(caja);
}

sumatoria(5); */


/* Ejercicio 4
Nuevo arreglo
Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
 */


/* function nuevoArreglo(numero){
    array1=[];
    for(i=0; i<=numero; i++){
        array1.push(i);
    }
    console.log(array1);
}

nuevoArreglo(15); */



/* Ejercicio 5
Similar String.split()
Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Importante: no podés usar el String.split(). Ejemplo:
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”]
 */


function split(palabra){
    let nuevoArray = [];
    for(i=0; i<palabra.length; i++){

        nuevoArray.push(palabra[i]);
    }
    console.log(nuevoArray);
}

split("hola papi");

/* PENDIENTE POR TERMINAR */