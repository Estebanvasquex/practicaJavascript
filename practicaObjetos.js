/* Descripción del problema
Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
forma de representar a los usuarios (cuentas bancarias). Cada una de estas cuentas
tiene la siguiente información:

● N.o de cuenta (solo números).
● Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en
pesos).
● Saldo en pesos (solo la cantidad).
● Titular de la cuenta (nombre completo).

Teniendo en cuenta esta información, se nos pide que hagamos lo siguiente: */

/* 
Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” que estará compuesta de la lista de objetos
obtenidos en el punto anterior. */

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!

  let banco = {
      cliente:" "
  }

  
function pasoClientes(arrayCuentas){

    console.log(arrayCuentas.length)
    let cliente = [];
   /*  for(let i=0; i<=arrayCuentas.length; i++){ */ /* De esta forma el for no funcionó */
        for(let i in arrayCuentas){
            cliente.push (arrayCuentas[i].titularCuenta)
        }
        

        console.log(cliente);
    }
   




pasoClientes(arrayCuentas)
