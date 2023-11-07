import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { BiSolidUpArrow } from 'react-icons/bi';
import { overview } from '../data/coindata';

const Overview = () => {
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
      {overview.map((view, index) => (
        <div className='flex justify-between items-center text-right gap-5' key={index + 1}>
          <div className='text-black'>{view.cap}</div>
          <div className={view.positive ? "text-green-600" : "text-red-600"}>{view.amount}</div>
        </div>
      ))}
    </div>
  </div>
  )
}
export default Overview;
