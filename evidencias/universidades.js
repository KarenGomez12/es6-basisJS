const axios = require ('axios')

let config = {
    method:'get',
    url: "https://restcountries.com/v3.1/all"
}


///cuando es arreglo
const f = async () =>{
    try{
        let response = await axios (config)
        response.data.forEach(pais => {
            console.log(`Tipo: ${pais.name.common}`) 
            console.log ('/////////////')  
        });
    }
    catch(error){
        console.error(error)
    }
}
f()


