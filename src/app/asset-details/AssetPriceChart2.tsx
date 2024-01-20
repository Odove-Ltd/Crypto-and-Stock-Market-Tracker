import { Chart as ChartJS, Line } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Card, CardContent } from '@mui/material';
import { useState, useEffect } from 'react';
import { ICoinHistoryData } from '../models/coin.data.type';
import { coinHistoryData } from '../services/dashboard/coinHistoryService';

interface ChartProps{
    data:{timestamp: number;
    price: number}[];
}

const AssetPriceChart: React.FC<ChartProps> = ({symbol}) => {

    const [days, setDays] = useState<number>(1);
    const [chartData, setChart] = useState<ICoinHistoryData[]>([]);

    const now = Date.now()
    const startTimestamp = now - (days * 24 * 60 * 60 * 1000);

    useEffect(() => {
        const chartDatasets = [
          {
            label: 'Price',
            data: chartData.map(({ timestamp, price }) => ({ x: timestamp, y: price })),
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 153, 255, 0.2)',
            fill: true,
          },
        ];
    
        setChartData({
          labels: data.map(({ timestamp }) => new Date(timestamp).toLocaleDateString()),
          datasets: chartDatasets,
        });
      }, [data]);



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