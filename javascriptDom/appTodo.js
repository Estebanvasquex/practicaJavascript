

const todos = JSON.parse (localStorage.getItem('todos')) || [];

const render = () => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ' ';
        for(let i=0; i<todos.length; i++){
            todoList.innerHTML += '<li>' + todos[i] + '</li>'
        }
        /*ejercicios realizado con metod .map*/
    
        /* .map NOS PERMITE ITERAR EL ARREGLO SIN NECEDIDA DE INDICARLE LOS INDICES, 
        NI EL TAMAÑO DEL ARREGLO NI LA SIEGUIENTE OPERACIÓN, SU TAREA ES REEMPLAZAR
        EL FOR, APLICA UNA FUNCIÓN A CADA UNO DE LOS ELEMENTOS Y NOS DEVUENVE UN
        ELEMENTO DE LA MISMA LONGITUD*/

         /*const todosTemple = todos.map(t => '<li>' + t + '<li>');
        todoList.innerHTML = todosTemple.join('');
        console.log(todosTemple)*/

    const elementos = document.querySelectorAll('#todo-list li') /* SELECCIONAR LOS ELEMENTOS li */
        elementos.forEach((elemento, indice) => {  /* forEach ITERA EL ELEMENTO li */
        elemento.addEventListener('click', () =>{ /* SE AGREGA UN ESCUCHADOR DE EVENTO CON EL EVENTO CLICK Y AL DAR CLICK SE EJECUTE LA FUNCIÓN */
            elemento.parentNode.removeChild(elemento)
            todos.splice(indice,1)
            actualizarTodos(todos)
            render() /* IMPORTANTE SE REQUIERE LLAMAR A LA FUNCION DENTRO DE ELLA MISMA RECURSIVIDAD  */
            
        })
        
 
    })

}

const actualizarTodos = (todos) => {
    const todoStrings = JSON.stringify(todos)
    localStorage.setItem('todos', todoStrings)
}

window.onload = () => {
    render() /* IMPORTANTE SE REQUIERE LLAMAR A LA FUNCION RENDERIZADO PARA QUE HAGA LA SINCRONIZACIÓN CON EL ARRAY DE ELEMENTOS */
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault(); /* ESTA FUNCIÓN PREVIENE QUE EL FORMULARIO ACTUALICE O REFRESQUE LA PAGINA SE DEBE PONER COMO PARAMENTRO DE LA FUNCIÓN Y SE ADICIONA EL METODO*/
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText)
        actualizarTodos(todos)
        render() /* IMPORTANTE SE REQUIERE LLAMAR A LA FUNCION RENDERIZADO PARA QUE HAGA LA SINCRONIZACIÓN CON EL ARRAY DE ELEMENTOS */
        
    
 
    

}

}

