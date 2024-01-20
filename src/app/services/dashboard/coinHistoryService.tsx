import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const coinHistoryData = async (currency: string, code: string, startTime: number, endTime: number)=>{
    try{
        const response = await axios.post ("https://api.livecoinwatch.com/coins/single/history",{
            currency: currency,
            code: code,
            start: startTime,
            end: endTime,
            meta: false,
        },{
            headers:{
                "content-type": "application/json",
                "x-api-key": apiKey,
            }
        })
        const responseData = response.data;
        return responseData;

    }
    catch(error){
        console.log(error);
    }
};
