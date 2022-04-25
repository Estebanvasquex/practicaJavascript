let events = [];
let arr = [] //cargar información

const eventName = document.querySelector('#eventName');
const eventDate = document.querySelector('#eventDate');
const buttonAdd = document.querySelector('#bAdd');
const eventsContainer = document.querySelector('#eventsContainer');

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    addEvent();
});

function addEvent(){
    if(eventName.Value === '' || eventDate.value === ''){
        return;
    }

    if(dataDiff(eventDate.value) < 0 ){ /* SI LA DIFERENCIA DE FECHA DE EVENTO CON FECHA ACTUAL ES NEGATIVA SE FINALIZA LA FUNCIÓN */
        return;
    }

    const newEvent = {
        id: (Math.random() * 100).toString(36).slice(3), /* ENTREGA UN ID CON STRING DIFERENTE CADA VEZ */
        name: eventName.value,
        date: eventDate.value
    };

    events.unshift(newEvent); /* AGREGA EL NUEVO OBJETO AL STRING */

    eventName.value = '';

    renderEvent();
}

function dateDiff(){  /* REGRESA EL NUMERO DE DÍAS QUE FALTAN DE LA FECHA ACTUAL A LA FECHA DE DESTINO */
    const date1 = new Date();
    const date2 = new Date();
}


