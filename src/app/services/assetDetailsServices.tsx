import axios from 'axios';

const FetchAssetDetailsData = async (currency: string, code: string)=>{
    try{
        const response = await axios.post ("https://api.livecoinwatch.com/coins/single",{
            currency: currency.toLocaleUpperCase(),
            code: code.toLocaleUpperCase,
            meta: true,
        },{
            headers:{
                "content-type": "application/json",
                "x-api-key": "3a724224-1dad-4ae5-923d-166be3c7f62e",
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
