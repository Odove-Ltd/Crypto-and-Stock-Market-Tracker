import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { BiSolidUpArrow } from 'react-icons/bi';
import { gainers } from './data/coindata';

const BiggestGainers = () => {
  return (
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
  );
            };
export default BiggestGainers;
