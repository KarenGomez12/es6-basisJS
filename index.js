//import { materias } from "./materias.js";
/*
//let: varibles e identificadores simples:
//number 
// string 
// booleans

let lenguaje = "PHP"
//const: funciones,arreglos,objetos

//template string
console.log(`No me gusta ${ lenguaje}`);
*/



/*
import{materias} from "./materias.js";
console.log(materias);
*/



/*
import pkg from 'colors'
//Metodos de los objeto arreglo
//foreach: recorre un arreglo
materias.forEach(function(materia){
    console.log(`materia: ${materia.nombre}`.blue)
    console.log(`profesor: ${materia.instructor}`.yellow)
})

//con areglo y consdicional 
materias.forEach(function(materia){
    if (materia.tipo=== 'transversal'){
    console.log(`materia: ${materia.nombre}`.blue)
    console.log(`profesor: ${materia.instructor}`.yellow)  
    }
})
*/


/*
materias.forEach((materia)=>{
    if (materia.tipo=== 'transversal'){
    console.log(`materia: ${materia.nombre}`.blue)
    console.log(`profesor: ${materia.instructor}`.yellow)  
    }
})

//map: construye un arreglo con base en otro
const profesores = materias.map((materia)=>{
    return materia.instructor
})
console.log(profesores)
*/

/* 
materias.forEach((materia)=>{
    if (materia.tipo=== 'transversal'){
    console.log(`materia: ${materia.nombre}`.blue)
    console.log(`profesor: ${materia.instructor}`.yellow)  
    }
})
//find: encontrar la primera ocurrencia(elemento)
//que cumpla con la criteria dada

const PHP = materias.find((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})
console.log(PHP)


materias.forEach((materia)=>{
    if (materia.tipo=== 'transversal'){
    console.log(`materia: ${materia.nombre}`.blue)
    console.log(`profesor: ${materia.instructor}`.yellow)  
    }
})
//find: encontrar la primera ocurrencia(elemento)
//que cumpla con la criteria dada

const PHP = materias.filter((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})
console.log(PHP)
*/


/*
materias.forEach((materia)=>{
    if (materia.tipo=== 'transversal'){
    console.log(`materia: ${materia.nombre}`.blue)
    console.log(`profesor: ${materia.instructor}`.yellow)  
    }
})
//push: agrega un elemento a un arerglo:
materias.push({
        id: 5,
        nombre: "Diseño Frontend",
        instructor:"Adriana Duarte",
        tipo:"técnica",
        notas:[
            4.5,
            4,
            4.6
        ]
    }
)
console.log(materias)
*/

/*
//splice: Eliminar
materias.splice(3,1)
console.log (materias)
*/

//findIndex: Actualizar
/*materias.splice(3,2,"LOLA","Lorena","Tecnica",[3.3,4.2,1])
console.log (materias)*/

