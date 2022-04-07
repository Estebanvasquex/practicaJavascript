/* const prompt = require("prompt-sync")({ sigint: true });

const matriz=[[1,2],[3, ,4,]]

console.table(matriz) */


/* for(let i=0; i<=matriz.length; i++){
    console.log("hola mundo")
    console.log(matriz[i][0])
} */

/* let test = "esteban";

for(let i = 0; i<test.length; i++){
    console.log("hola mundo")
    console.log(test[i])
}
 */



/* Declara una variable que contenga una matriz
 de 5x5 llena de puros numeros enteros y positivos
*/

/**
* Luego, escribe un algoritmo para sumar todos
* los numeros en la matriz.
*/

let matriz2 = [[1,2,3,4,5], [6,7,8,9,10]]

/* console.table(matriz2) */

let suma =  0;

for(let i=0; i<matriz2.length; i++){
 
    for(let j=0; j<matriz2[i].length; j++){
        console.log(matriz2[i][j]);
       /* console.log(matriz2[i][j]) */
       suma = suma + matriz2[i][j];
    }

}

console.log (suma)