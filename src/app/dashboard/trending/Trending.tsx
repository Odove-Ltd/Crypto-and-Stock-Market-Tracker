import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { BiSolidUpArrow } from 'react-icons/bi';
import { trending } from '../data/coindata';

const Trending = () => {
  return (
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
  );
};
export default Trending;
