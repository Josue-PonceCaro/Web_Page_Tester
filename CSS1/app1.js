function mostarAlerta(mensaje)
{
    alert(mensaje)
}
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var valores = [true,5,false,"hola","adios",2]
a = valores[4]>valores[3]
console.log(a)
// b = prompt() // para pedir un valor por pantalla
/*
if (b>0 && b<99999999){
    residuo = b%23
    letra = letras[residuo]
    mostarAlerta(letra)

}else{
    mensaje ="DNI"
    // .concat("texto") anhade el "texto" al string
    mensaje = mensaje.concat(" es correcto")
    // toUpperCase vuelve todo el string en mayuscula
    mensaje = mensaje.toUpperCase()
    // toLowerCase vuelve todo el string en minuscula
    mensaje = mensaje.toLowerCase()
    //charAt busca en la posicion x del string
    d = mensaje.charAt(0)
    // indexOf("xX") devuelve la posicion en la que se encuentra 1ER string buscado
    // si no existe devuelve -1
    posicion = mensaje.indexOf("D")

    mostarAlerta(mensaje)
}
*/
for (i in valores){
    console.log(valores[i])
}
var factorial = 1
for (var i = 1;i <=5;i++){
    factorial *=i
}
mostarAlerta(factorial)


var mm = "DNI DNI"
mm = mm.concat(" es xyz")
// todo mayuscula
console.log(mm.toUpperCase())
// todo minuscula
console.log(mm.toLowerCase())
// busca el caracter en la posicion
console.log(mm.charAt(1))
// busca el primero, muestra posicion
console.log(mm.indexOf("DNI"))
// busca el ultimo, muestra posicion
console.log(mm.lastIndexOf("DNI"))
// mustra el string desde la posicion indicada
// si se coloca una posicion negativa, se tiene todo el string
console.log(mm.substring(3))
// se puede colocar el inicio y el final del nuevo strign
console.log(mm.substring(0,2))
// split("x") separa los caracteres en funcion al string ingresado
console.log(mm.split(" "))
// ARREGLOSSSS
// AREGLOSSSSS
var a = [1,2,3]
var b = [4,5,6]
// concat tambien sirve para unir vectores
var c = a.concat(b)
console.log(c)
console.log(c.length)
// join es lo opuesto a split, puesto es su funcion es unir
var as = ["hola","mundo","mundo"]
console.log(as.join(" "))
// pop elimina el ùltimo valos de una lista y devuelve ese mismo valor
var mundo = as.pop()
console.log(as)
// push anhade un elemento al final de la lista
as.push(mundo)
console.log(as)
// shift y unshift hace lo mismo que pop y push
// pero con el primer elemento
// reverse invierte el arreglo

// OPERACIONES NUMERICS
// OPERACIONES NUMERICS
// isNaN indica si es un valor numerico definido
// por ejemplo 0/0
// Infinity, muestra si es infinito, como 10/0
// toFixed(1) decuelve el numero de decimales que desees

function polindromo (text){
    texto = text
    texto = texto.toLowerCase()
    texto = texto.split(" ")
    texto = texto.join("")

    texto2 = ""
    var cant =  texto.length
    for (var j = cant;j>=0;j--){
        texto2 = texto2+texto.charAt(j)
    }
    if(texto2 == texto){
        alert("SON IGUALES")
    }
}
polindromo("La ruta nos aporto otro paso natural")