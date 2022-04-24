

const todos = [];

const render = () => {

}

window.onload = () => {

const form = document.getElementById('todo-form');
form.onsubmit = (e) => {
    e.preventDefault(); /* ESTA FUNCIÓN PREVIENE QUE EL FORMULARIO ACTUALICE O REFRESQUE LA PAGINA SE DEBE PONER COMO PARAMENTRO DE LA FUNCIÓN Y SE ADICIONA EL METODO*/
    const todo = document.getElementById('todo');
    const todoText = todo.value;
    todos.push(todoText)
    todo.value = '';
    console.log(todos)

    const todoList = document.getElementById('todo-list');

    /*ejercicios realizado con el for*/
     todoList.innerHTML = ' ';
    for(let i=0; i<todos.length; i++){
        todoList.innerHTML += '<li>' + todos[i] + '</li>'
    }
    const elementos = document.querySelectorAll('#todo-list li')
    elementos.forEach((elemento, indice) => {
        console.log(elemento, indice)
        console.log("holamundo")
    })


 
 /*    const todosTemple = todos.map(t => '<li>' + t + '<li>');
    
    todoList.innerHTML = todosTemple.join('');
    console.log(todosTemple) 
     */
    


    /*ejercicios realizado con metod .map*/
    
/* .map NOS PERMITE ITERAR EL ARREGLO SIN NECEDIDA DE INDICARLE LOS INDICES, NI EL TAMAÑO DEL ARREGLO NI LA SIEGUIENTE OPERACIÓN, SU TAREA ES REEMPLAZAR EL FOR, APLICA UNA FUNCIÓN A CADA UNO DE LOS ELEMENTOS Y NOS DEVUENVE UN ELEMENTO DE LA MISMA LONGITUD*/


}

}