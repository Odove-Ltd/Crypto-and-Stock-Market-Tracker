'use client'

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
require('dotenv').config();

const CoinsTable = () => {

  const now = Date.now()
  const startTimestamp = now - (7 * 24 * 60 * 60 * 1000);
 
  const [coinData, setCoinData] = useState<any[]>([]);
  const [last7days, setLast7days] =  useState({});

  useEffect (() => {
    const fetchLast7daysData = async () => {
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
            "x-api-key": process.env.LIVE_COIN_API,
          },
        }
        );
        const data = response.data;
      } catch(error){
        console.error(`Didn't work ${error}`)
      }
      finally{
        console.log('data')
      }
    };
  
    fetchLast7daysData();
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
    } catch(error){
      console.error(`error is ${error}`)
    }
    finally{
      console.log('data')
    }
  };

  //setInterval(fetchData, 1000)
  fetchData();
},
[]);

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
              <tr key={coin.code} className="my-4 font-normal">
                <td>{index + 1}</td>
                <td className="flex items-center justify-center">
                  <img src={coin.webp32} alt={coin.name}/>
                  <span className="text-sm flex flex-col ml-2">
                  <span>{coin.name}</span>
                  <span className="c-grey text-gray-500">{coin.code}</span>
                  </span>
                </td>
                <td>${coin.rate}</td>
                <td>{coin.delta.day}</td>
                <td>{coin.delta.week}</td>
                <td>${coin.cap}</td>
                <td>${coin.volume}</td>
                <td>{coin.circulatingSupply}</td>
                <td>{coin.last7days}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex text-sm text-black">
        <p className="mr-4">Showing 1-50 of 100</p>
        <p className="border border-black border-1 p-2 text-xs">1</p>
        <p className="border border-black border-1 p-2">2</p>
      </div>
    </div>
  );
};

export default CoinsTable;
