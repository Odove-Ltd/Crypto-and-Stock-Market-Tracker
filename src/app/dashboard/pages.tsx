import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { BiSolidUpArrow } from 'react-icons/bi';
import { trending, gainers, overview } from './data/coindata';

const Dashboard = () => {
  return (
    <div className='grid items-center justify-center gap-8'>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-bold text-black'>Today&apos;s Cryptocurrency Data </h1>
        <h3 className='text-xl font-normal text-black'>
          The global crypto market cap is $1,95TZ, a 2.22% decrease over the last day.
        </h3>
      </div>

      <div className='flex flex-row justify-center gap-12 items-center'>

        {/* Trending */}
        <div className='border border-black rounded-md p-8'>
          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-bold text-black'>Trending</h3>
            <div className='flex items-center gap-4'>
              <h4 className='text-gray-400 text-sm'>More</h4>
              <h4 className='text-gray-400 text-sm cursor-pointer'> {'>'} </h4>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            {trending.map((trend, index) => (
              <div className='flex items-center justify-between gap-6' key={index + 1}>
                <h4 className='text-gray-400 text-sm'>{index + 1}</h4>
                <div className='flex items-center gap-2'>
                  <div className='text-black'>{trend.name}</div>
                  {trend.loss ? (
                    <div className='flex items-center justify-center text-red-500'>
                      <AiOutlineCaretDown color="red" size={12} />
                      <div className='text-red-600'>{trend.percentage}</div>
                    </div>
                  ) : (
                    <div className='flex items-center justify-center'>
                      <BiSolidUpArrow size={12} color="green" />
                      <div className='text-green-600'>{trend.percentage}</div>
                    </div>
                  )}
                </div>
                <div className={trend.loss ? "text-red-500" : "text-green-500"}>{trend.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Biggest Gainers */}
        <div className='border border-black rounded-md p-8'>
          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-bold text-black'>Biggest Gainers</h3>
            <div className='flex items-center gap-4'>
              <h4 className='text-gray-400 text-sm'>More</h4>
              <h4 className='text-gray-400 text-sm cursor-pointer'> {'>'} </h4>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            {gainers.map((gain, index) => (
              <div className='flex items-center justify-between gap-6' key={index + 1}>
                <h4 className='text-gray-400 text-sm'>{index + 1}</h4>
                <div className='flex items-center gap-2'>
                  <div className='text-black'>{gain.name}</div>
                  {gain.loss ? (
                    <div className='flex items-center justify-center text-red-500'>
                      <AiOutlineCaretDown color="red" size={12} />
                      <div className='text-red-600'>{gain.percentage}</div>
                    </div>
                  ) : (
                    <div className='flex items-center justify-center'>
                      <BiSolidUpArrow size={12} color="green" />
                      <div className='text-green-600'>{gain.percentage}</div>
                    </div>
                  )}
                </div>
                <div className={gain.loss ? "text-red-500" : "text-green-500"}>{gain.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className='border border-black rounded-md p-8'>
          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-bold text-black'>Overview</h3>
            <div className='flex items-center gap-4'>
              <h4 className='text-gray-400 text-sm'>More</h4>
              <h4 className='text-gray-400 text-sm cursor-pointer'> {'>'} </h4>
            </div>
          </div>

          <div className='grid gap-4'>
            {overview.map((view, index) => (
              <div className='flex justify-between items-center text-right gap-5' key={index + 1}>
                <div className='text-black'>{view.cap}</div>
                <div className={view.positive ? "text-green-600" : "text-red-600"}>{view.amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recently Added */}
        <div className='border border-black rounded-md p-8'>
          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-bold text-black'>Recently Added</h3>
            <div className='flex items-center gap-4'>
              <h4 className='text-gray-400 text-sm'>More</h4>
              <h4 className='text-gray-400 text-sm cursor-pointer'> {'>'} </h4>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            {trending.map((trend, index) => (
              <div className='flex items-center justify-between gap-6' key={index + 1}>
                <h4 className='text-gray-400 text-sm'>{index + 1}</h4>
                <div className='flex items-center gap-2'>
                  <div className='text-black'>{trend.name}</div>
                  {trend.loss ? (
                    <div className='flex items-center justify-center text-red-500'>
                      <AiOutlineCaretDown color="red" size={12} />
                      <div className='text-red-600'>{trend.percentage}</div>
                    </div>
                  ) : (
                    <div className='flex items-center justify-center'>
                      <BiSolidUpArrow size={12} color="green" />
                      <div className='text-green-600'>{trend.percentage}</div>
                    </div>
                  )}
                </div>
                <div className={trend.loss ? "text-red-500" : "text-green-500"}>{trend.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
