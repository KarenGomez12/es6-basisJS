/*
let colors = require('colors');

const estudiante={
    id: 1 ,
    nombre: 'Karen',
    apellido: 'Gomez',
    identificacion: 14875833
}
*/


/*Desestructurar el estudiante
/let {nombre, identificacion} = estudiante;
//console.log('Nombre:Karen'.bgBlue) para impirmir propiedad con color 
console.log(estudiante.nombre.red)
console.log(estudiante.apellido.blue)
console.log(estudiante.identificacion)//Cuando es numero no dejara poner color
*/


const estudiantes = ["Laura", "Carlos", "Ana" ,"Jorge"]
/*
//Desestructurar el arreglo COMPLETO de estudiantes:
let [L, C, A , J] = estudiantes
console.log(L, C, A, J)
*/

/*
//Desestructurar el arreglo a mi eleccion de estudiantes:
let [ , C, ,J]= estudiantes
console.log(C, J)
*/

const g1 = [
"Laura",
"Carlos",
"Ana"
]

const g2 = [
    "Enrique",
    "Jairo",
    "Valeria"
]

const g3 = [
    ...g1,
    "Diana",
    g2,
    "Duvan"
]

const estudiante={
    id: 1 ,
    nombre: 'Karen',
    apellido: 'Gomez',
    identificacion: 14875833,
    amigos: g3
}
console.log(estudiante);