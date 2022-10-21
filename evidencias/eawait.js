/*API BOBBURGES */
/*await axios */
const axios = require ('axios')

let config = {
    method:'get',
    url: "https://bobsburgers-api.herokuapp.com/episodes"
}

const f = async () =>{
    try{
        let response = await axios (config)
        response.data.forEach(element => {
            console.log(`Episodios: ${element.episode}`) 
            console.log ('*************')  
        });
    }
    catch(error){
        console.error(error)
    }
}
f()
