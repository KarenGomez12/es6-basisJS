const needle = require ('needle')

const endpoint = 'https://rickandmortyapi.com/api/character'
needle ('get', endpoint)
    .then((response)=>{
        response.body.results.forEach(element => {
            console.log(`Tipo: ${element.name}`) 
            console.log ('+++++++++++++++')  
        });
        return response.body.results
    })
    .then((data)=>{
        data.forEach(element => {
            console.log(`Tipo: ${element.name}`) 
            console.log ('+++++++++++++++')
        });
    })
    .catch(error=>{
    console.error(error)
    })