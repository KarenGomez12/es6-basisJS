//manera sintaxis felcha
// escribir componentes funcionales
export const sumar = (a ,b)=>a+b

//Para exportar la funcion de aritmetica
//opcion 1 con commonjs
//module.exports = sumar; 

//opcion 2 con module
//export default sumar; 


//Sintaxis identificadror 
export const restar = function(a,b){
    return a-b
}

//Sintaxis legada
export function multiplicar (a,b){
    return a*b
}

export function potencia (a,b){
    return a^b
}