'use client'

import React from "react";
import { useState, useEffect } from "react";
import { coinDataHeader } from "./data";
import axios from "axios";

const CoinsTable = () => {

  const now = Date.now()
  const startTimestamp = now - (7 * 24 * 60 * 60 * 1000);
 
  const [coinData, setCoinData] = useState<any[]>([]);
  const [last7days, setLast7days] =  useState({});

  useEffect (() => {
    const fetchchartData = async () => {
      try{
        const response = await axios.post("https://api.livecoinwatch.com/coins/single/history",
        {
          currency: "USD",
          code: "BTC",
          start: startTimestamp,
          end: now,
          meta: true,
        },{
          headers:{
            "content-type": "application/json",
            "x-api-key": "3a724224-1dad-4ae5-923d-166be3c7f62e",
          },
        }
        );
        const data = response.data;
        console.log(data)
        console.log("all good")
        // setCoinData(data)
        // console.log(data[0].code)
        //setMarketCap(data.)
      } catch(error){
        console.error(`Didn't work ${error}`)
      }
      finally{
        console.log('data')
      }
    };
  
    fetchchartData();
  },
  []);

useEffect (() => {
  const fetchData = async () => {
    try{
      const response = await axios.post("https://api.livecoinwatch.com/coins/list",
      {
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 50,
        meta: true,
      },{
        headers:{
          "content-type": "application/json",
          "x-api-key": "3a724224-1dad-4ae5-923d-166be3c7f62e",
        },
      }
      );
      const data = response.data;
      console.log(data)
      setCoinData(data)
      console.log(data[0].code)
      //setMarketCap(data.)
    } catch(error){
      console.error(`error is ${error}`)
    }
    finally{
      console.log('data')
    }
  };

  fetchData();
},
[]);

useEffect(() => {
  const fetchChartData = async (coinCode: string) => {
    try {
      const response = await axios.post(
        "https://api.livecoinwatch.com/coins/single/history",
        {
          currency: "USD",
          code: coinCode,
          start: startTimestamp,
          end: now,
          meta: true,
        },
        {
          headers: {
            "content-type": "application/json",
            "x-api-key": "3a724224-1dad-4ae5-923d-166be3c7f62e",
          },
        }
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(`Error fetching chart data for ${coinCode}`);
    }
  };

  coinData.forEach((coin) => {
    fetchChartData(coin.code);
  });
}, [coinData, startTimestamp, now]);
  return (
    <div className="my-10 lg:px-10">
      <table className="border-collapse  border-l-0 border-r-0 text-black border-black text-center table-fixed w-full">
        <thead>
          <tr className=" ">
            <th className="">Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>24hr</th>
            <th>7dys</th>
            <th>Market Cap</th>
            <th>Volume (24hr)</th>
            <th>Circuling Supply</th>
            <th>Last 7 days</th>
          </tr>
        </thead>

        <tbody>
          {coinData.map((coin, index) => {
            return (
              <tr key={coin.code} className=" my-4 font-normal">
                <td>{index + 1}</td>
                <td className="text-sm flex flex-col" >
                  <span>{coin.name}</span>
                  <span>{coin.code}</span>
                </td>
                <td>{coin.rate}</td>
                <td>{coin.delta.day}</td>
                <td>{coin.delta.week}</td>
                <td>{coin.cap}</td>
                {/* <td className="text-sm flex flex-col">
                  <span>{coin.volume.price}</span>
                  <span className=" text-xs ">{coin.volume.vol}</span>
                </td> */}
                <td>{coin.volume}</td>
                <td>{coin.circulatingSupply}</td>
                <td>{coin.last7days}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoinsTable;
