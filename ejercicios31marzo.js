const prompt = require("prompt-sync")({ sigint: true });



const array=[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function varloIndice(array,index){
    return array[index]
}

console.log(varloIndice(array,5));


function multiplos(){

    for(i=0; i<=100; i++){


        if(i % 3 == 0){
            console.log("fizz");
        }

        else if(i % 5 == 0){
            console.log("buzz");
        }

        else if (i % 15 == 0){

            console.log("fizzbuzz");
            
        }

        else{
            console.log(i)
        }
    }
}
multiplos()


function numPar(num){
    if( num % 2 === 0){
        return "EL NÚMERO ES PAR"
    }
    else{
        return "EL NÚMERO NO ES PAR"
    }
}

console.log(numPar(prompt("INGRESE EL NÚMERO PARA VALIDAD SI ES PAR: ")));