import axios from 'axios';

const coinHistoryData = async (currency: string, code: string, startTime: number, endTime: number)=>{
    try{
        const response = await axios.post ("https://api.livecoinwatch.com/coins/single/history",{
            currency: currency,
            code: code,
            start: startTime,
            end: endTime,
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

export default coinHistoryData;
