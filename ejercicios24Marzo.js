const prompt = require("prompt-sync")({ sigint: true });

// let miArreglito = [];

// let miObjeto = {
//     numero:5
// }

// miArreglito.push(miObjeto);
// console.log(miArreglito);

// miObjeto.numero = 10

// console.log(miArreglito);


// alicia = [ 100, 80, 75 ];
// bob = [ 90, 20, 25];

// for(i=0; i<alicia.lenght; i++){
//     for(j=0; j<bob.lenght; j++){
//         if(alicia[i] > bob[i]){
//             console.log(bob[i]);
//         }
//         else{
//             console.log("1 punto bob")
//         }
//     }
// }


let array1=new Array(1,2,3,4,5,6);
let array2=new Array(2,4,6,78);
 
let iguales=0;
for(let i=0;i<array1.length;i++)
{
	for(let j=0;j<array1.length;j++)
	{
		if(array1[i]==array2[j])
			iguales++;
	}
}
console.log(iguales);
