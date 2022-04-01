const prompt = require("prompt-sync")({ sigint: true });



/* Metodos para los array */



let array1=[];

array1.push("amarillo", "azul", "rojo", "1800", "naranja", "rojo", true)

console.log(array1);



// for(i=0; i<5; i++){
//     let datos = prompt("Ingresa el dato para el array " + i);
//     array1.push(datos);
//     /* i++ */
// }
// console.log(array1);

/* sacar el último elemento del array y llevarlo a una variable*/

let elUltimo = array1.pop();

console.log(array1);
console.log(`"El ultimo elemento del array es: ${elUltimo}"`);

/* SACAR DATOS DATOS DEL ARRAY AL INICIO CON EL METODO shift y unshift para agregar al inicio */

array1.shift();

array1.unshift(55);

console.log(array1);

/* metodo para buscar en un array indexof devueve la poosición de la primera posición del parametro a buscar y lastIndexof devuelve la última posición */

console.log(array1.indexOf("rojo"));

console.log(array1.lastIndexOf("rojo"));
console.log(array1);


/* cuando se quiere saber si un dato se encuentra en un array se busca con el indexof y si lo encuentra devuelve la posición en caso de lo contrario devuelve -1 */


let posicionRojo= array1.indexOf("rojo");

console.log(posicionRojo);

 posicionRojo != -1 ? console.log("El color rojo si existe "): console.log("El color rojo no existe")
    

 /* Volver un string en un array juntar todos los parametros join */

 let juntar = array1.join(" * ");

 console.log(juntar);

 let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  let fraseNueva= arrayFrase.join(" ");
  
  
  console.log(fraseNueva)

/* agregar un objeto dentro de un array */

  array1.push({
    nombre: "Miguel",
  
    promedio: 2,
  
    curso: "Android"
  });

console.log(array1);


