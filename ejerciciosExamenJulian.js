// Loop de pares
// Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.


function loopDePares(num){
  for(let i=0; i<=10; i++){
    if((i+num) %  2 === 0 ){
      console.log( "EL NÚMERO i + num " )
    }
  }
}

loopDePares(10)



























// const loopDePares = (numero) => {
//   for (let i = 0; i <= 100; i++) {
//     let suma = i + numero;
//     suma % 2 == 0 ? console.log(`El número ${suma} es par`) : false;
//   }
// };
// // loopDePares(5);

// // Loop de impares con palabra
// // Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

// const loopDeImpares = (numero, palabra) => {
//   for (let i = 0; i <= 100; i++) {
//     let suma = i + numero;
//     suma % 2 != 0 ? console.log(suma, palabra) : false;
//   }
// };
// // loopDeImpares(5, "impar");

// // Sumatoria
// // Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// // sumatoria(3) debe retornar 6 porque hace (1+2+3)
// // sumatoria(8) debe retornar 36
// const sumatoria = (numero) => {
//   let suma = 0;
//   for (let i = 0; i <= numero; i++) {
//     suma += i;
//   }
//   return suma;
// };
// // console.log(sumatoria(3));

// // Nuevo arreglo
// // Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// // nuevoArreglo(5) debe retornar [1,2,3,4,5]
// // nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

// const nuevoArreglo = (numero) => {
//   let arreglo = [];
//   for (let i = 1; i <= numero; i++) {
//     arreglo.push(i);
//   }
//   return arreglo;
// };
// // console.log(nuevoArreglo(5));

// // Similar String.split()
// // Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// // split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// // split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

const split = (string) => {
   let arregloString = [];
   for (let i = 0; i < string.length; i++) {
     arregloString.push(string[i]);
   }
   return arregloString;
 };
 console.log(split("hola"));

// // Carácter del medio
// // Deberás crear una función llamada caracterDelMedio que reciba un string por parámetro y devuelva sus caracteres del medio. Ejemplo:
// // caracterDelMedio(“Digital House”) debe retornar “l”
// // caracterDelMedio(“hola”) debe retornar “ol”
// // caracterDelMedio(“cosas”) debe retornar “s”

// function caracterDelMedio(string) {
//   let i = Math.round(string.length / 2) - 1;

//   if (i % 2 != 0) {
//     console.log(string[i] + string[i + 1]);
//   } else {
//     console.log(string[i]);
//   }
// }
// //   caracterDelMedio("Digital House");
// //   caracterDelMedio("hola");
// //   caracterDelMedio("cosas");

// // Mover ceros a lo último
// // Deberás crear una función llamada moverCeros que reciba un arreglo como parámetro y devuelva otro con los números “0” ordenados al final. Ejemplo:
// // moverCeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
// // moverCeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]

// const moverCeros = (arreglo) => {
//   let nuevoArreglo = [];

//   for (let i = 0; i < arreglo.length; i++) {
//     arreglo[i] === 0 ? (nuevoArreglo.push(0), arreglo.splice(i, 1)) : false;
//   }

//   return arreglo.concat(nuevoArreglo);
// };

// // console.log(moverCeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// // console.log(moverCeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// // Manejando dos arreglos
// // Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
// // arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar:
// // Soy 1 y yo soy h
// // Soy 2 y yo soy o
// // Soy 3 y yo soy l
// // Soy 4 y yo soy a

// const arrayHandler = (arr1, arr2) => {
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       console.log(`soy ${arr1[i]} y yo soy ${arr2[i]}`);
//     }
//   } else {
//     return "los tamaños de los arrays no son iguales";
//   }
// };
// // arrayHandler([1, 2, 3, 4], ["h", "o", "l", "a"]);

// // Conversor a camelCase
// // Deberás crear una función que convierta de snake_case o kebab-case a camelCase. La primera letra del resultado debe estar en mayúsculas solo si en el string original estaba en mayúscula. Ejemplo:
// // “el-guerrero-silencioso” debería convertirse en “elGuerreroSilencioso”
// // “El_guerrero_silencioso” debería convertirse en “ElGuerreroSilencioso”

// const toCamelCase = (string) => {
//   let arreglo = string.split("");
//   for (let i = 0; i < string.length; i++) {
//     arreglo[i] === "-" || arreglo[i] === "_"
//       ? (arreglo.splice(i, 1), (arreglo[i] = arreglo[i].toUpperCase()))
//       : false;
//   }
//   return arreglo.join("");
// };
// // console.log(toCamelCase("El_guerrero_silencioso"));

// // Palíndromo
// // Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
// // palindromo(“anilina”) debe retornar true
// // palindromo(“Ana”) debe retornar true
// // palindromo(“Enrique”) debe retornar false

// const palindromo = (string) => {
//   const stringReves = string.toLowerCase().split("").reverse().join("");

//   return stringReves === string.toLowerCase() ? true : false;
// };
// console.log(palindromo("anilina"));
// console.log(palindromo("Ana"));
// console.log(palindromo("Enrique"));
