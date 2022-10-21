/*API CRIPTOMONEDAS*/
/*Promises axios*/
const axios = require ('axios')

let config = {
    method:'get',
    url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
}

axios(config)
        .then((response)=>{
            return response.data
        })
        .then((data)=>{
            data.forEach(element => {
                console.log(`Simbolo: ${element.symbol}`) 
                console.log ('+++++++++++++++')
            });
        })
        .catch(error=>{
        console.error(error)
        })
