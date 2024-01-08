'use client'
import axios from 'axios';
import {useEffect, useState} from 'react';

const TopText: React.FC = () => {

  const [marketCap, setMarketCap] = useState<number>(0);
  const [marketCapLast24Hrs, setMarketCapLast24Hrs] = useState<number>(0);

  const now: number = new Date().getTime()
  const twentyFourHoursAgo: number = now - 24 * 60 * 60 * 1000
  
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await axios.post('https://api.livecoinwatch.com/overview/history',{
          currency: "USD",
          start: twentyFourHoursAgo,
          end: now,
        },
        {
          headers:{
            "content-type": "application/json",
            "x-api-key": "3a724224-1dad-4ae5-923d-166be3c7f62e",
          }
        }
        );

        const data = response.data
        console.log("Here",data)
        setMarketCapLast24Hrs(data[0].cap)
      }
      catch(error){
        console.error(error)
      }
    }
    fetchData();

  }, [now, twentyFourHoursAgo])

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await axios.post("https://api.livecoinwatch.com/overview",{
          "currency":"USD"
        },
        {
          headers:{
            "content-type": "application/json",
            "x-api-key": "3a724224-1dad-4ae5-923d-166be3c7f62e",
          }
        }
        );
        const data = response.data
        setMarketCap(data.cap)
   
      }
      catch(error){
        console.error(error)
      }
    };

    fetchData();
  }, [])

  const formatMarketCap = (value: number): string =>{
    if (value >= 1e12){
      return `${(value / 1e12).toFixed(2)} trillion`;
    }
    if(value >=1e9){
      return `${(value / 1e9).toFixed(2)} billion`;
    }
    if (value >= 1e6){
      return `${(value/1e6).toFixed(2)} million`;
    } else{
      return `${(value).toFixed(2)}`;
    }
  };

  const calculatePercentageChange = () :number =>{
    if (marketCap > 0 && marketCapLast24Hrs > 0){
      const percentageChange = ((marketCap - marketCapLast24Hrs)/marketCapLast24Hrs * 100);
      return parseFloat(percentageChange.toFixed(2));
    }
    return 0;
  }

  const percentageChange = calculatePercentageChange();

  return (
    <div className='flex flex-col items-start justify-center gap-8 mb-8 ml-20'>
      <div className='flex flex-col'>
        <h1 className='text-xl font-bold text-black'>Today&apos;s Cryptocurrency Data </h1>
        <h3 className='text-base font-normal text-black'>
          The global crypto market cap is ${formatMarketCap(marketCap)}, a {' '} 
          <span className={`text-${percentageChange > 0 ? 'green': 'red'}-700`}>{Math.abs(percentageChange)}%</span>
          {' '}{percentageChange > 0 ? 'increase' : 'decrease'}
          {' '} over the 24 hours.
        </h3>
      </div>
    </div>
      );
  };

export default TopText;
