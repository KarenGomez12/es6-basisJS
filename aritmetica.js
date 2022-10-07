/*const a= 10;
const b=30;


function sumar(a,b){
    console.log (`La suma es: ${a+b}`)
}

sumar(a, b);*/


/*const a= 10;
const b=30;

//manera con identificado de 
// escribir componentes funcionales
const sumar = function(a ,b){
    console.log (`La suma es: ${a+b}`)
}

sumar(a,b);*/


//opcion 1 importar commonjs
//const sumar = require(`./operaciones`) 

//opcion 2 con module
//import sumar from './operaciones.js'; una importacion
import {sumar,restar,multiplicar,potencia} from './operaciones.js';

const a= 10;
const b=30;
console.log(`la suma es:${sumar(a,b)}`)
console.log(`la resta es:${restar(a,b)}`)
console.log(`la multiplicar es:${multiplicar(a,b)}`)
console.log(`la potencia es:${potencia(a,b)}`)
