window.onload = () =>  { /* CON ESTA FUNCIÓN ESPERA A QUE TODO EL CONTENIDO ESTE CARGADO PARA EJECUTAR LA FUNCIÓN
  AUNQUE LA ETIQUETA SCRIPT DEBE IR DESPUÉS DEL BODY PARA EVITAR PROBLEMAS DE CARGA*/
console.log("intro a dom desde main.js")
const parrafo2 = document.getElementById('text2')  
const parrafo = document.getElementById('text')  
console.log(parrafo) /* TRAE TODA LA INF DE LA ETIQUETA CON ID text */
console.log(parrafo.innerHTML) /* TRAE VALOR DE LA ETIQUETA CON ID text */
parrafo.innerText = 'TEXTO ACTUALIZADO'
parrafo2.innerHTML = '<li>Esteban</li>' /*INCRUSTA UN ELEMENTO HTML*/
}
