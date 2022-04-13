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