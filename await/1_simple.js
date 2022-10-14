let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/* let endpoint = 'https://pokeapi.co/api/v2/type' */
let endpoint = 'https://rickandmortyapi.com/api/character'
const exito = (response)=>{
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo)=>{
     console.log(`Tipo: ${tipo.name}`) 
     console.log ('---------------------')   
    })
}

const fallo = (status)=> {
    console.log(status)
}


const get_data = (endpoint) =>{
    //definir una promesa a la API en modo asinconico 
    let promise = new Promise((resolve, reject)=>{
        //1. Creamos el objeto de conexion
        let http = new XMLHttpRequest();
        //2. Abrir conexcion a la API
        http.open('get', endpoint)
        //3. Enviar la solicitud(request) a la API
        http.send()
        //4. Hacer el tratamiento de la response
        http.onload = () => {
            if(http.status === 200){
                resolve(http.responseText)
            }
            else{
                reject(http.status)
            }
        } 
    })
    return promise
}


async function f(){
    try{
        let response = await get_data(endpoint)
        exito (response)
    }
    catch(error){
        fallo(error)
    }
}
f()