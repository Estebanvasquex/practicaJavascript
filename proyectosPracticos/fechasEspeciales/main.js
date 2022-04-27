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

    if(dateDiff(eventDate.value) < 0 ){ /* SI LA DIFERENCIA DE FECHA DE EVENTO CON FECHA ACTUAL ES NEGATIVA SE FINALIZA LA FUNCIÓN */
        return;
    }

    const newEvent = {
        id: (Math.random() * 100).toString(36).slice(3), /* ENTREGA UN ID CON STRING DIFERENTE CADA VEZ */
        name: eventName.value,
        date: eventDate.value
    };

    events.unshift(newEvent); /* AGREGA EL NUEVO OBJETO AL STRING */

    eventName.value = '';

    renderEvents();
}

function dateDiff(){  /* REGRESA EL NUMERO DE DÍAS QUE FALTAN DE LA FECHA ACTUAL A LA FECHA DE DESTINO */
    const targetDate = new Date();
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime()
    const days = Math.ceil(difference /(1000*3600*24)) /* SE PASA UN DÍA A MILISEGUNDO PARA PODERLO HACER LA DIVISIÓN */
    return days;
}

function renderEvents(){
    const eventsHTML = events.map((event =>{
        return  ` 
                <div class="event">
                    <div class="days">
                        <span class="days-number"> ${dateDiff(event.date)}</span>
                        <span class="days-text">dias</span>
                    </div>
                    <div class="event-name">${event.name}</div>
                    <div class="event-name">${event.date}</div>
                    <div class="actions" data-id="${event.id}">
                        <button class="bDelete">Elimar</button>
                    </div>
                </div>

         `
    }));

    eventsContainer.inerHTML = eventsHTML.join("");
    
}


