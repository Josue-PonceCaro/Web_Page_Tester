var titulo = document.getElementsByTagName("h1")
console.log(titulo.length)
console.log(titulo[0].textContent)
var parrafo = document.getElementsByTagName("p")
console.log(parrafo[0].textContent)
function muestraMensaje()
{
    alert("PINCHADO 2")
}
document.getElementById("pinchable2").onclick = muestraMensaje
// // crear nodo de tipo elemento 
// var parrafo = document.createElement("p")
// // crear nodo de tipo texto
// var contenido = document.createTextNode("Nuevo NODO, CREADO EN JS")
// // ANHADIR NODO texto como hijo del nodo elemento
// parrafo.appendChild(contenido)
// // anhadir el nodo elemento como hijo de la pagina
// document.appendChild(parrafo)


