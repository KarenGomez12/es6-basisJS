function llamarAlumno(alumno, callback){
let llamadaAlumno= `Llamado a alumno: ${alumno}`
//ejeuctar la funcion callback
callback(llamadaAlumno)
}

//definir funcion callback
function impirmir(texto){
console.log(texto)
}
//invocar la fncyion pricipal llamarAlumno
llamarAlumno("Karen Gomez",impirmir)

