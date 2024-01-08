'use client'
import React, {useEffect, useState} from 'react';
import { coinHistoryData } from '../services/coinHistoryService';
import { formatTime } from '../services/coinHistoryService';
import { assetDetailsContainerClass } from '@/app/utils/styling/tempTWStyles';
import { ICoinHistoryData } from '../types/coin.data.type';
import { Line} from 'react-chartjs-2';
import 'chart.js/auto'


interface Prop {
    symbol: string
}

const AssetPriceChart: React.FC<Prop> = ({symbol}) => {

    const [days, setDays] = useState<number>(1);
    const [chartData, setChart] = useState<ICoinHistoryData[]>([]);

    const now = Date.now()
    const startTimestamp = now - (days * 24 * 60 * 60 * 1000);

    useEffect(()=>{
        const fetchData = async () =>{
            const historyData = await coinHistoryData("USD", symbol, startTimestamp, now );
            setChart(historyData.history)
        }; fetchData(); 
    }, [])

    const data = {
        labels: chartData.map((item)=>formatTime(item.date)),
        datasets:[
            {
                label: "Price",
                data: chartData.map((item)=>item.rate),
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
            },
        ],
    };

  const options = {
    tooltips: {
      mode: 'nearest',
      intersect: false,
    },
    hover: {
      mode: 'nearest' as 'nearest',
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    legend: {
      display: false,
    },
  };

    return(
        <div className='w-3/4 mx-auto'>
            <Line data = {data}  options={options}/>
        </div>
    )
    
}
export default AssetPriceChart;
