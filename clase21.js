// const prompt = require("prompt-sync")({ sigint: true });


// let arr1 = ["casa", "cab@llo", "perro"];

// for (let i = 0; i<arr1.length; i++){
//     for(let j=0; j<arr1[i].length;){
//         if(j=@){
//             console.log(arr1[i])
//         }
//     }

// }

// PENDIENTE POR PREGUNTAR

// let prueba = false | 3==4

// console.log(prueba)


// let prueba = "Gato" && "Perro"
// console.log(prueba)


// let prueba = "Gato" || "Perro" 
// console.log(prueba)

// let dato = true;

// if(dato == true){
//     console.log("el valor es" + dato);
// }
// else{
//     console.log("el valor es" + dato);
// }
// let nombre= "esteban"

// if(nombre == "Cosme Fulanito"){
//         console.log(false);
// }
// else{
//     console.log(true);

// }



// function puedePasar(nombre) {
    
//     if(nombre == "Cosme Fulanito"){
//         console.log(false);
// }
// else{
//     console.log(true);
// }

// }
// console.log (puedePasar("Cosme Fulanito"));


/* IF TERNARIO */

function puedePasar(nombre) {
    
    nombre == "Cosme Fulanito" ? console.log(false): console.log(true);
}


console.log (puedePasar("esteban"));



function tengoClases(dia) {
	switch (dia) {
        case "lunes": 
    	console.log("tenés clases")
		break;

        case "miércoles": 
    	console.log("tenés clases")
		break;

        case "viernes": 
    	console.log("tenés clases")
		break;

		default:
		console.log("no tenés clases");
	}
}

console.log(tengoClases("miércoles"));




/* EJERCICIOS */ 

/* Revisá el siguiente código y asegurate de entenderlo para poder avanzar con el
ejercicio.
Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:
● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida. Por favor ingrese un número válido."
Importante: no se deberá mostrar ningún otro mensaje.
● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría de edad.
● Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
edad es impar?". */


let edad = 21 //(el número es a modo de ejemplo, podés cambiarlo o
    
    if (edad < 0){
        console.log("Error, edad inválida. Por favor ingrese un número válido.");

    }

    else if(edad < 18) {
        console.log("No puede pasar al bar.");
            if(edad % 2 != 0){
            console.log ("¿Sabias que tu edad es impar?");
            }
    } 

    else if (edad < 21){
        console.log("Puede pasar al bar, pero no puede tomar alcohol.");
            if(edad % 2 != 0){
                console.log ("¿Sabias que tu edad es impar?");
            }
    }


    else if(edad = 21){
        console.log("Binevenido ya tienes la mayoría de edad");
            if(edad % 2 != 0){
                console.log ("¿Sabias que tu edad es impar?");
            }
        
    }



   
    

    // else {
    //     console.log("Puede pasar al bar y tomar alcohol.");
    // }



    // switch (edad) {
    //     case (edad<0):
    //         console.log("Error, edad inválida. Por favor ingrese un número válido.");
    //         break;
    
    //     default:
    //         console.log("esto es una prueba")
    //         break;
    // }


    // if(edad<0){
    //     console.log("funciona ok");
    // }
    // else{
    //     console.log("mejor aun");
    // }


