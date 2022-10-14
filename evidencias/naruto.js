const axios = require ('axios')

let config = {
    method:'get',
    url: "https://animechan.vercel.app/api/quotes/anime?title=naruto"
}


//cuando es objeto 
const f = async () =>{
    try{
        let response = await axios (config)
        response.data.forEach(element => {
            console.log(`anime: ${element.anime}`)
            console.log(`character: ${element.character}`)
            console.log ('/////////////') 
        });
    }
    catch(error){
        console.error(error)
    }
}
f()
