/* Ejercicio 1
Revisa el siguiente archivo, identifica sus componentes, vamos a estar usándolos a lo largo de este ejercicio. 
¿Qué tipo de dato es?
¿Cuáles son las claves que puedes identificar?
Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma descendente. (*) */ 
console.log("_________________Ejercicio 1______________________________")

console.log("¿Qué tipo de dato es?:  Es un array que contiene varios objetos con diferentes tipos de datos como string, númericos, indfinido")

console.log("________________________________________________")
const alumnos = [
    {
      id: 0,
      nombre: "Leandro",
      apellido: "Borrelli",
      legajo: 20210308,
      notas: [],
    },
    {
      id: 1,
      nombre: "Esteban",
      apellido: "Piazza",
      legajo: 20210211,
      notas: [],
    },
    {
      id: 2,
      nombre: "Martin",
      apellido: "Cejas",
      legajo: 20210218,
      notas: [],
    },
    {
      id: 3,
      nombre: "Karina",
      apellido: "Borgna",
      legajo: 20210516,
      notas: [],
    },
    {
      id: 5,
      nombre: "Javier",
      apellido: "Riera",
      legajo:  20220125,
      notas: [],
    }

  ];

  console.log(alumnos)



function ordenar(arreglo){
    for(let j=0 ; j < arreglo.length ; j++){
        for(let i=0 ; i < arreglo.length - 1 ; i++){
    
            if(arreglo[i].legajo < arreglo[i+1].legajo){
        
                let temporal = arreglo[i]; 
                arreglo[i] = arreglo[i+1];
                arreglo[i+1] = temporal;
            }
        }
    }
    return arreglo
}

let arregloOrdenado = ordenar(alumnos);
console.log(arregloOrdenado);



console.log("--------------------Ejercicio 2------------------------------")


/* Dado el objeto  */

 /*     Crear un método que retorne el promedio de notas. (*)
 */

let alumno = {
    id: 5,
    nombre: "Lucas",
    apellido: "Astrada",
    legajo: 20220125,
    notas: [10,6,8,7,9],
    promedio: function (){

        let temporal = 0 

        for(let i=0; i < this.notas.length; i++){
           
            temporal = temporal + this.notas[i]
        }

        let notaPromedio = temporal / this.notas.length

        return notaPromedio

    }

    }

    console.log(alumno)
    let notaPromedio = alumno.promedio()
    console.log("la nota promedio es: " + notaPromedio)

       /*  Crear una función que ordene las notas del alumno de forma ascendente. (*) */
    
    console.log("Notas del alumno sin ordenar  " + alumno.notas)

    function ordenarNotas (objeto){
        for(let i=0; i<objeto.notas.length; i++){
            if(objeto.notas[i]>objeto.notas[i+1]){
                let temporal = 0
                temporal = objeto.notas[i]
                objeto.notas[i] = objeto.notas[i+1]
                objeto.notas[i+1] = temporal
            }
        }

        return objeto.notas
    } 

    let notasOrdenadasAsc = ordenarNotas(alumno)
    
    console.log("Notas ordenadas de forma ascendente  " + notasOrdenadasAsc)


 


    console.log ("------------ejercicio3------------")

   /*  Ejercicio 3
Crea una matriz de 3x3, cuadrada, con números enteros negativos en cada una de sus posiciones.
Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 5. 
Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es impar.
Crear una función que retorne la multiplicación de las diagonales de la matriz.

(*) Deberás mostrar por consola antes y después de función o método que implementaste. Utiliza VisualStudio code. 
 */

let matriz = [[-1,-2,-3],[-4,-5,-6],[-7,-8,-9]]
console.table(matriz)

function sumaMatriz(matriz){
    let suma =  0;

for(let i=0; i<matriz.length; i++){
 
    for(let j=0; j<matriz[i].length; j++){
        if(matriz[i][j] % 5 == 0){
       suma = suma + matriz[i][j];
    }
    }

}

return suma

}

let multiCinco = sumaMatriz(matriz)
console.log("La suma de los multiplos de cinco es " + multiCinco)
