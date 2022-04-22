

const prompt = require("prompt-sync")({ sigint: true });

let personas = [
    {
     id: 1,
     nombre: "Ale",
     edad: 15
    },
    {
     id: 2,
     nombre: "Javi",
     edad: 83
    },
    {
     id: 3,
     nombre: "Luis",
     edad: 26
    },
    {
     id: 4,
     nombre: "Dan",
     edad: 16
    },
    {
     id: 5,
     nombre: "Tito",
     edad: 22
    },
    {
     id: 6,
     nombre: "Marina",
     edad: 76
    },
    {
     id: 7,
     nombre: "Susy",
     edad: 35
    },
    {
     id: 8,
     nombre: "John",
     edad: 25
    },
    ]
    
    function ordenar(objeto){
        for(let j=0 ; j < objeto.length ; j++){
        for(let i=0 ; i < objeto.length - 1 ; i++){
        if(objeto[i].edad > objeto[i+1].edad){
           
        let temporal = objeto[i];
        objeto[i] = objeto[i+1];
        objeto[i+1] = temporal;
        }
        }
        }
        return objeto
        }
        let arrayOrdenado = ordenar(personas)
        console.log(arrayOrdenado)




        const binarySearch = (list, item) => {
            let low = 0;
            let high = list.length - 1;
            while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const guess = list[mid].edad;
            if (guess === item) {
            return list[mid].nombre;
            }
            if (guess > item) {
            high = mid - 1;
            } else {
            low = mid + 1;
            }
            }
            return null;
            };
            let nombrePorEdad = binarySearch(arrayOrdenado, 25);
            console.log(nombrePorEdad);





