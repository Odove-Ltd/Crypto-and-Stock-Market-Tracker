import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const FetchAssetDetailsData = async (currency: string, code: string)=>{
    try{
        const response = await axios.post ("https://api.livecoinwatch.com/coins/single",{
            currency: currency,
            code: code,
            meta: true,
        },{
            headers:{
                "content-type": "application/json",
                "x-api-key": apiKey,
            }
        })
        const responseData = response.data
        return responseData;

    }
    catch(error){
        console.log(error);
    }
};

export default FetchAssetDetailsData;
