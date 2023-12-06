'use client'

import { useState, useEffect } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { BiSolidUpArrow } from 'react-icons/bi';
import axios, {AxiosResponse} from 'axios';

const Overview = () => {

  const [overviewData, setOverviewData] = useState({
    marketCap: 0,
    volume: 0,
    liquidity: 0,
    btcDominance: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await axios.post('http://localhost:3003/api/overview', {
        currency: "USD"});
        
        const responseData = response.data;
        console.log("Done")

        setOverviewData({
          marketCap: responseData.marketCap,
          volume: responseData.volume,
          liquidity: responseData.liquidity,
          btcDominance: responseData.btcDominance,
        });
      }
      catch (error) {
        console.error('Error fetching overview data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='border border-black rounded-md p-8'>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-bold text-black'>Overview</h3>
        <div className='flex items-center gap-4'>
          <h4 className='text-gray-400 text-sm'>More</h4>
          <h4 className='text-gray-400 text-sm cursor-pointer'> {'>'} </h4>
        </div>
      </div>

      <div className='grid gap-4'>
        {Object.entries(overviewData).map(([key, value], index) => (
          <div className='flex justify-between items-center text-right gap-5' key={index + 1}>
            <div className='text-black'>{key}</div>
            <div className={value >=0 ? "text-green-600" : "text-red-600"}>${value.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
