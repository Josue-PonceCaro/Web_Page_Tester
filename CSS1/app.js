//TIPOS DE DATOS
//LOS OBJETOS GUARDAN DIFERENTES TIPOS DE DATOS

// se coloca entre llaves
//tiene una llave y un valos

//console.log({"usuario":"pedrop","edad":12,"score":50.4})
var nombre = "Julio"
let apellido = "lin"
const pi = 3.1415
let pi2 = 3.1416
//se puede comparar
let comparar = pi!=pi2
// se puede comparar con doble y triple igual
// obviamente que tiene diferencias
if (comparar === true){
    console.log("Corresto")
}else if (comparar ===false){
    console.log("iNcorrecto")
}
switch (comparar){
    case "true":
        console.log("Es verdad")
    case "false":
        console.log("es falso")
    default:
        console.log("NO ES BOOL ")
}