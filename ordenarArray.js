/* Usando el metodo Bubble sort */


let numeros = [6, 5, 1, 2, 4, 3, 8, 7];

for(let j=0; j<numeros.length; j++){
for (let i=0; i<numeros.length -1; i++){
	
	if(numeros[i] > numeros[i+1]){
		let temporal = 0
		temporal = numeros[i]
		numeros[i]=numeros[i+1]
		numeros[i+1] = temporal
	}
}
}

console.log(numeros)


console.log ("--------Ordenar objeto forma descentedete por propiedad--------------")

let numeros2 = [
	{
		nombre: "Esteban",
		edad: 43
	},
	{
		nombre: "carlos",
		edad:50
	},
	{
		nombre:"pepito",
		edad:60
	},
	{
		nombre:"chepito",
		edad:80
	}

]
for(let j=0; j<numeros2.length; j++){
	for (let i=0; i<numeros2.length -1; i++){
		
		if(numeros2[i].nombre > numeros2[i+1].nombre){
			let temporal = 0
			temporal = numeros2[i]
			numeros2[i]=numeros2[i+1]
			numeros2[i+1] = temporal
		}
	}
	}



/* for (let i = 0; i < numeros.length; i++) {
	for (let j = 0; j < numeros.length; j++) {
		if (numeros[j] > numeros[j + 1]) {
			let temp = numeros[j];
			numeros[j] = numeros[j + 1];
			numeros[j + 1] = temp;
		}
	}
}
*/
console.log(numeros2); 

console.log("---------ejercicio 3 ----------------")


const edades = [33,27,34,30,34,25]

console.log(edades)

function ordenarEdades(array) {
	
	for(let j=0; j<array.length; j++){
	/* 	console.log("hola mundo") */

		for(let i=0; i<array.length - 1; i++){
			if(array[i] < array[i+1]){
				let temporal = 0
				temporal = array[i]
				array[i] = array[i+1]
				array[i+1] = temporal
			/* 	console.log("hola mundo") */
			}
		}
	
		
	}

	
}

ordenarEdades(edades)
console.log(edades) 




/* 
Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—. */

let like = [3,8,45,65,80,8,87,21,3,65,78,45,11,23,55]

console.log(like)

for(j=0; j<like.length; j++){
	for(let i=0; i<like.length -1; i++){
		if(like[i]<like[i+1]){
		let temporal = 0
		temporal = like[i]
		like[i] = like[i+1]
		like[i+1] = temporal

	}
}
}

console.log("El primero " + like[0])
console.log("El segundo " + like[1])
console.log("El tercero " + like[2])
console.log("El último " + like[like.length-1])


/* Ejercicio 2
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor. */

let temperatura = [
	{
		dia: "lunes",
		varlorNumericoDia: 23,
		Mes:1,
		temperaturaMaximaDia: 20,
		temperaturaMinimaDia: 18,
		valorNumericoMes: 25
	},

	{
		dia: "Martes",
		varlorNumericoDia: 24,
		Mes:8,
		temperaturaMaximaDia: 10,
		temperaturaMinimaDia: 8,
		valorNumericoMes: 50
	},

	{
		dia: "jueves",
		varlorNumericoDia: 15,
		Mes:9,
		temperaturaMaximaDia: 29,
		temperaturaMinimaDia: 20,
		valorNumericoMes: 56
	},

	{
		dia: "domingo",
		varlorNumericoDia: 3,
		Mes:5,
		temperaturaMaximaDia: 19,
		temperaturaMinimaDia: 15,
		valorNumericoMes: 56
	},

	{
		dia: "sabado",
		varlorNumericoDia: 3,
		Mes:8,
		temperaturaMaximaDia: 25,
		temperaturaMinimaDia: 16,
		valorNumericoMes: 5
	}

] 

function ordenarObjetos(objeto) {
	
		for(let j=0; j<=objeto.length; j++){

			for(let i=0; i<objeto.length -1; i++){

				if(objeto[i].temperaturaMinimaDia<objeto[i+1].temperaturaMinimaDia){
					
					let temporal = 0
					temporal = objeto[i].temperaturaMinimaDia
					objeto[i].temperaturaMinimaDia = objeto[i+1].temperaturaMinimaDia
					objeto[i+1].temperaturaMinimaDia = temporal
				}

				
			}

		}

		return objeto
		
	}

	console.log("-----------------------------------------------")

	console.log(ordenarObjetos(temperatura))
	
	console.log("-----------------------------------------------")

	let matricial = [ [1,2,3],[4,5,6],[7,8,9] ]

console.table(matricial);

function sumarDiagonal(matriz){

    let sumaDiagonalPrincipal = 0;
    let sumaDiagonalSecundaria = 0;

    for(let i=0 ; i < matriz.length; i++){
        for(let j=0 ; j < matriz[i].length ; j++){
    
            if(i+j == matriz.length - 1){
                sumaDiagonalSecundaria += matriz[i][j]
            }

            if(i == j){
                sumaDiagonalPrincipal += matriz[i][j];
            }
    
        }
    }
    let arreglo = [sumaDiagonalPrincipal,sumaDiagonalSecundaria]

    return arreglo;
}

let diagonalMatriz = sumarDiagonal(matricial);
console.log(diagonalMatriz);


console.log("-----------------------------------------------")

let arreglo = [
    {
        nombre : "Juan",
        legajo : 21
    },
    {
        nombre : "Ana",
        legajo : 12
    },
    {
        nombre : "Pepe",
        legajo : 16
    },
    {
        nombre : "Kevin Malo",
        legajo : 2
    }
]


function ordenar(arreglo){
    for(let z=0 ; z < arreglo.length ; z++){
        for(let i=0 ; i < arreglo.length - 1 ; i++){
    
            if(arreglo[i].legajo > arreglo[i+1].legajo){
        
                let temporal = arreglo[i]; 
                arreglo[i] = arreglo[i+1];
                arreglo[i+1] = temporal;
            }
        }
    }
    return arreglo
}

let arregloOrdenado = ordenar(arreglo);
console.log(arregloOrdenado);

	


	
