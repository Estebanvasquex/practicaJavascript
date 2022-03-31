

let misMascotas = [];

let gato = {
    nombre: "Manchas",
    raza: "Criollo",
    edad: 19,
    sonido: "greee",
    hacerSonido: function hacerSonido(){
        return this.sonido + " " + this.sonido

    }

}

let perro = {
    nombre: "ChipiChipi",
    raza: "Criollo",
    edad: 30,
    sonido: "Guau",
    hacerSonido: function hacerSonido(){
        return this.sonido + " " + this.sonido

    }

}

let loro = {
    nombre: "Roberto",
    raza: "Frances",
    edad: 55,
    sonido: "Quiere Cacao",
    hacerSonido: function hacerSonido(){
        return this.sonido + " " + this.sonido

    }

}


misMascotas.push(gato,perro,loro);

/* console.log(misMascotas);  */

console.log(loro.hacerSonido())

function aumentarEdad(array){
    for(i=0; i<=array.lengt; i++){
        array[i].edad = array[i].edad + 5;
    }
    return array
}

let arrayModificado = aumentarEdad(misMascotas);

console.log(misMascotas);


/* function aumentarEdad2(array){
    for(let i = 0)
}
 */



/* 
Crear una función que va a generar un identificador en cada objeto, que será secuencial y que empezará en 1 */

function agregarIdentificador(array){
    let id = i + 1
    for(i=0; i<array.length; i++){
        array[i].identificador = id + i/* En este caso si el objeto no tiene la propiedad identificador lo va a crear */
    }
    return array;
}


let arrayConIdentificadores =  agregarIdentificador(misMascotas);
console.log(arrayConIdentificadores);