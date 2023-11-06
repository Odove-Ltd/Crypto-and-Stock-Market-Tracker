import React from 'react'
import { trending,gainers,overview } from './data/coindata'
import {AiOutlineCaretDown} from "react-icons/ai"
import {BiSolidUpArrow} from "react-icons/bi"
const Dashboard = () => {
  return (
    <div className='grid items-center justify-center gap-8'>
        <div className='flex flex-col '>
<h1 className='text-[40px] font-bold text-black'>Today's Cryptocurrency Data </h1>
<h3 className='text-[24px] font-normal text-black'>The global crypto market cap is $1,95TZ, a 2.22% decrease over the last day.</h3>
        </div>
        <div className='flex flex-row justify-center gap-[3rem] items-center'>

<div className='border-[1px] border-black rounded-md '>
<div className='flex flex-col gap-3 p-[2rem]'>
    <div className='flex flex-row justify-between items-center'>
    <h3 className='text-[15px] font-extrabold text-black'>Trending</h3>
    <div className='flex flex-row items-center justify-center gap-4'>
        <h4 className='text-gray-400 text-[14px]'>More</h4>
        <h4 className='text-gray-400 text-[14px] cursor-pointer'> {">"} </h4>
    </div>
    </div>
    <div className='flex flex-col gap-4'>
{ trending.map ((trend) =>(
    <div className='flex flex-row justify-center gap-6 items-center'>
<h4  className='text-gray-400 text-[14px]'>{trend.number}</h4>
<div className='flex flex-row justify-center items-center gap-2'>
<div className='text-[14px] text-black'>{trend.name}</div>
{trend.loss == true ? <div className='flex flex-row text-red-500 text-[12px] items-center justify-center'>
<AiOutlineCaretDown color="red" size={12}    />
<div className='text-[12px] text-red-600'>{trend.percentage}</div>
     </div> : <div className='flex flex-row items-center justify-center'>
<BiSolidUpArrow size={12} color="green"  />
<div className='text-[12px] text-green-600'>{trend.percentage}</div>
         </div> }

</div>
<div className={trend.loss == true ? "text-red-500 text-[14px] font-normal" : "text-green-500 text-[14px] font-normal"}>{trend.price}</div>
    </div>
))}
</div>
</div>
</div>

<div className='border-[1px] border-black rounded-md '>
<div className='flex flex-col gap-3 p-[2rem]'>
    <div className='flex flex-row justify-between items-center'>
    <h3 className='text-[15px] font-extrabold text-black'>Biggest Gainers</h3>
    <div className='flex flex-row items-center justify-center gap-4'>
        <h4 className='text-gray-400 text-[14px]'>More</h4>
        <h4 className='text-gray-400 text-[14px] cursor-pointer'> {">"} </h4>
    </div>
    </div>
    <div className='flex flex-col gap-4'>
{ gainers.map ((gain) =>(
    <div className='flex flex-row justify-center gap-6 items-center'>
<h4  className='text-gray-400 text-[14px]'>{gain.number}</h4>
<div className='flex flex-row justify-center items-center gap-2'>
<div className='text-[14px] text-black'>{gain.name}</div>
{gain.loss == true ? <div className='flex flex-row text-red-500 text-[12px] items-center justify-center'>
<AiOutlineCaretDown color="red" size={12}    />
<div className='text-[12px] text-red-600'>{gain.percentage}</div>
     </div> : <div className='flex flex-row items-center justify-center'>
<BiSolidUpArrow size={12} color="green"  />
<div className='text-[12px] text-green-600'>{gain.percentage}</div>
         </div> }

</div>
<div className={gain.loss == true ? "text-red-500 text-[14px] font-normal" : "text-green-500 text-[14px] font-normal"}>{gain.price}</div>
    </div>
))}
</div>
</div>
</div>

<div className='border-[1px] border-black rounded-md '>
<div className='flex flex-col gap-3 p-[2rem]'>
    <div className='flex flex-row justify-between items-center'>
    <h3 className='text-[15px] font-extrabold text-black'>Overview</h3>
    <div className='flex flex-row items-center justify-center gap-4'>
        <h4 className='text-gray-400 text-[14px]'>More</h4>
        <h4 className='text-gray-400 text-[14px] cursor-pointer'> {">"} </h4>
    </div>
    </div>
    <div className='grid gap-4'>
{ overview.map ((view) =>(
   <div className='flex flex-row justify-between items-center text-right gap-5 '>
<div  className='text-[14px] text-black'>{view.cap}</div>
<div className={view.positive == true ? "text-[12px] text-green-600  text-right " : "text-[12px] text-red-600 text-right"} >{view.amount}</div>
     </div>
))}
</div>
</div>
</div>

<div className='border-[1px] border-black rounded-md '>
<div className='flex flex-col gap-3 p-[2rem]'>
    <div className='flex flex-row justify-between items-center'>
    <h3 className='text-[15px] font-extrabold text-black'>Trending</h3>
    <div className='flex flex-row items-center justify-center gap-4'>
        <h4 className='text-gray-400 text-[14px]'>More</h4>
        <h4 className='text-gray-400 text-[14px] cursor-pointer'> {">"} </h4>
    </div>
    </div>
    <div className='flex flex-col gap-4'>
{ trending.map ((trend) =>(
    <div className='flex flex-row justify-center gap-6 items-center'>
<h4  className='text-gray-400 text-[14px]'>{trend.number}</h4>
<div className='flex flex-row justify-center items-center gap-2'>
<div className='text-[14px] text-black'>{trend.name}</div>
{trend.loss == true ? <div className='flex flex-row text-red-500 text-[12px] items-center justify-center'>
<AiOutlineCaretDown color="red" size={12}    />
<div className='text-[12px] text-red-600'>{trend.percentage}</div>
     </div> : <div className='flex flex-row items-center justify-center'>
<BiSolidUpArrow size={12} color="green"  />
<div className='text-[12px] text-green-600'>{trend.percentage}</div>
         </div> }

</div>
<div className={trend.loss == true ? "text-red-500 text-[14px] font-normal" : "text-green-500 text-[14px] font-normal"}>{trend.price}</div>
    </div>
))}
</div>
</div>
</div>
        </div>
        </div>
  )
}

export default Dashboard