

// let misMascotas = [];

// let gato = {
//     nombre: "Manchas",
//     raza: "Criollo",
//     edad: 19,
//     sonido: "greee",
//     hacerSonido: function hacerSonido(){
//         return this.sonido + " " + this.sonido

//     }

// }

// let perro = {
//     nombre: "ChipiChipi",
//     raza: "Criollo",
//     edad: 30,
//     sonido: "Guau",
//     hacerSonido: function hacerSonido(){
//         return this.sonido + " " + this.sonido

//     }

// }

// let loro = {
//     nombre: "Roberto",
//     raza: "Frances",
//     edad: 55,
//     sonido: "Quiere Cacao",
//     hacerSonido: function hacerSonido(){
//         return this.sonido + " " + this.sonido

//     }

// }


// misMascotas.push(gato,perro,loro);

// /* console.log(misMascotas);  */

// console.log(loro.hacerSonido())

// function aumentarEdad(array){
//     for(i=0; i<=array.lengt; i++){
//         array[i].edad = array[i].edad + 5;
//     }
//     return array
// }

// let arrayModificado = aumentarEdad(misMascotas);

// console.log(misMascotas);


// /* function aumentarEdad2(array){
//     for(let i = 0)
// }
//  */



// /* 
// Crear una función que va a generar un identificador en cada objeto, que será secuencial y que empezará en 1 */

// function agregarIdentificador(array){
//     let id = i + 1
//     for(i=0; i<array.length; i++){
//         array[i].identificador = id + i/* En este caso si el objeto no tiene la propiedad identificador lo va a crear */
//     }
//     return array;
// }


// let arrayConIdentificadores =  agregarIdentificador(misMascotas);
// console.log(arrayConIdentificadores);


// function loro(texto){
//     for(let i=0; i<=5; i++){
//         console.log(texto)
//     }
// }

// loro("quiere cacao");


// function noParesDeContarImparesHasta(numero){
//     contador = 0;
//     for(let i=0; i<=numero; i++){
//         if (i % 2 != 0){
//             contador = contador + 1
           
//         }
         

//     }
//     console.log(contador);

// }

// noParesDeContarImparesHasta(0);

// const split2 = (string) => {
//     for (let i = 0; i < string.length; i++) {
//       console.log(string[i])
//     }

//   };
//   console.log(split2("hola"));
/*   
function reemplazoFastFast(texto, buscar, reemplazo ){
    let cambio = texto.replace(buscar, reemplazo)
    console.log(cambio)
}

reemplazoFastFast("hola soy papi", "papi", "mami" )

function menciona (text, palabra){
    let busqueda = text.indexOf(palabra);
    if(busqueda != -1){
        return true
    }
}

let final = menciona("mi papa es lindo", "lindo");

console.log(final)


let frase = 'Hola!, soy Carli';
let inicioCorte = frase.indexOf("Carli");
let totalCorte = frase.length
let licenciada = frase.slice (inicioCorte,totalCorte);

console.log(licenciada) */


const matriz=[[1,2],[3,4]]
const nombre = 'Esteban'

console.table(nombre.toString(36).slice(3))
const date2 = new Date();
console.log(date2)



