
const prompt = require("prompt-sync")({ sigint: true });




/* Local de sándwiches
Elegir sándwiches báse y llevar tipos de báse a una variable y precio a otra
Elegir tipo de pan y llevar tipo de pan a variable y precio a otra
total a pagar


llega string con tipo de sándwiches base el cual tiene un valor base




Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.

Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
recibiremos los datos de la siguiente manera.
Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
diferente por cada selección:
● Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)
Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
deseado:
● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
adicionales:
● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5
Cada uno de estos adicionales están representados por booleanos —es decir, true o
false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
total de seis valores booleanos, uno por cada adicional—.
Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
Finalmente, deberá retornar el valor numérico del total a pagar del cliente. */

/* tipo de sándwich base */

/* let pollo = 150;
let carne = 200;
let vegetariano = 100; */

let base = "";

/* tipo de pan deseado: */

/* let panBlanco = 50;  */  /* Blanco c/orégano y parmesano debe ingresar string "blaco"*/
/* let negro = 60;  *//* Negro c/avena debe ingresar el string “negro” */
/* let sinGluten= 75; */ /*  Sin gluten debe ingresar el string “s/gluten” */

let tipoPan="";

/* adicionales: */
/* 
let queso = 20;
let tomate = 15;
let lechuga = 10;
let cebolla = 15;
let mayonesa = 5;
let mostaza = 5; */


let totalPedido = 0;

/* console.log("total pedidos antes del for" + totalPedido) */

console.log("BIENVENIDO A SU RESTAURANTE SÁNDWICH EL PROGRAMADOR")


for(i=0; i<=3; i++){
    if(i=0){

        base = prompt("Favor escriba pollo - carne - vegetariano: ");
        
        console.log(totalPedido);

        switch (base) {
            case "pollo":
                    totalPedido=totalPedido
    
            case "carne":
                    totalPedido=totalPedido+200    
            
            case "vegetariano": 
                    totalPedido=totalPedido+100  
                     
                    
        console.log(totalPedido)
        }
}

console.log(totalPedido);
