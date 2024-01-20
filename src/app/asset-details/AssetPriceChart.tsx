import React, { useEffect, useState } from 'react';
import { coinHistoryData } from '../services/dashboard/coinHistoryService';
import { formatTime } from '../utils/helpers/helpers';
import { makeStyles, createStyles, Theme  } from "@material-ui/core/styles";
import { Paper, Typography } from '@mui/material';
import { ICoinHistoryData } from '../models/coin.data.type';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chartContainer: {
      width: '100%',
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
      boxSizing: 'border-box',
    },
  })
);

interface Prop {
  symbol: string;
}

const AssetPriceChart: React.FC<Prop> = ({ symbol }) => {
  const [days, setDays] = useState<number>(1);
  const [chartData, setChart] = useState<ICoinHistoryData[]>([]);
  const classes = useStyles();

  const startTimeStamp = Date.now();
  const endTimestamp = startTimeStamp - days * 24 * 60 * 60 * 1000;

  useEffect(() => {
    const fetchData = async () => {
      const historyData = await coinHistoryData('USD', symbol, endTimestamp, startTimeStamp);
      setChart(historyData.history);
    };
    fetchData();
  }, [days, startTimeStamp, endTimestamp, symbol]);

  const data = {
    labels: chartData.map((item) => formatTime(item.date)),
    datasets: [
      {
        label: 'Price',
        data: chartData.map((item) => item.rate),
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
      y: {
        grid: {
          display: true,
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

  return (
    <div className='w-3/4 mx-auto'>
      <Paper className={classes.chartContainer} elevation={3}>
        <Typography variant="h6" gutterBottom>
          {symbol} Price Chart
        </Typography>
        <div className="flex items-center space-x-0">
          <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 border-r border-gray-400" onClick={() => setDays(1)}>
            24H
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 border-r border-gray-400" onClick={() => setDays(7)}>
            7D
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 border-r border-gray-400" onClick={() => setDays(14)}>
            14D
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 border-r border-gray-400" onClick={() => setDays(30)}>
            30D
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 border-r border-gray-400" onClick={() => setDays(90)}>
            90D
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300" onClick={() => setDays(365)}>
            12M
          </button>
        </div>
        <Line data={data} options={options} />
      </Paper>
    </div>
  );
};

export default AssetPriceChart;
