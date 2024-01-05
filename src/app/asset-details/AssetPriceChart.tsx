import React, {useEffect, useState} from 'react';
import coinHistoryData from '../services/coinHistoryService';
import { assetDetailsContainerClass } from '@/app/utils/styling/tempTWStyles';
import { ICoinHistoryData } from '../types/coin.data.type';
import { Line } from 'react-chartjs-2';


interface Prop {
    symbol: string
}

const AssetPriceChart: React.FC<Prop> = ({symbol}) => {

    const now = Date.now()
    const startTimestamp = now - (7 * 24 * 60 * 60 * 1000);

    const [startTime, setStartTime] = useState<number>();
    const [data, setData] = useState<ICoinHistoryData[]>([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const historyData = await coinHistoryData("USD", symbol, startTimestamp, now );
            setData(historyData.history)
        }
    }, [])
    const options = {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const label = context.dataset.label || '';
                const value = context.parsed.y;
                return `${label}: $${value}`;
              },
            },
          },
        },
      };
    

    return (
        <div className={`${assetDetailsContainerClass}`}>
            <Line data ={data} options={options}/>
            
        </div>
    );
};

export default AssetPriceChart;
