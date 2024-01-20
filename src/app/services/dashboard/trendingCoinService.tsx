import axios from "axios";

export const getTrendingCoins = async () =>{
    const response = await axios.get("https://api.coingecko.com/api/v3/search/trending}",{
        headers:{
            'accept': 'application/json'
        }
    })
    return response.data
    console.log(`The trending data ${response.data}`)
}
getTrendingCoins()