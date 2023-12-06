'use client'
import {useEffect, useState} from 'react';
import {config} from 'dotenv'
import axios from 'axios';

config()

const TopText = () => {

  const api:string = process.env.LIVE_COIN_API!;
  const [marketCap, setMarketCap] = useState<number>(0);

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await axios.post("https://api.livecoinwatch.com/overview",{
          "currency":"USD"
        },{
          headers:{
            "content-type": "application/json",
            "x-api-key": "3a724224-1dad-4ae5-923d-166be3c7f62e",
          }
        });
        const data = response.data
        setMarketCap(data.cap)
   
      }
      catch(error){
        console.error(error)
      }
    }
    fetchData();
  }, [])


    return (
      <div className='flex flex-col items-start justify-center gap-8 mb-8 ml-20'>
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold text-black'>Today&apos;s Cryptocurrency Data </h1>
          <h3 className='text-base font-normal text-black'>
            The global crypto market cap is ${marketCap}, a 2.22% decrease over the last day.
          </h3>
        </div>
      </div>
        )
    }
export default TopText;