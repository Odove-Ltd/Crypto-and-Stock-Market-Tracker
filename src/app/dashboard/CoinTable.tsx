'use client'
import React from "react";
import { useState, useEffect } from "react";
import axios, {AxiosResponse} from 'axios';
import Link from "next/link";
import { ICoinData } from "../types/coin.data.type";
import { coinDataContext } from "../context/coin-data.context";
import { Pagination } from "./Pagination";
import AssetTable from "../asset-details/top-bar/AssetTable";

const CoinsTable: React.FC = () => {

  const now = Date.now()
  const startTimestamp = now - (7 * 24 * 60 * 60 * 1000);
 
  const [coinData, setCoinData] = useState<ICoinData[]>([]);
  const [last7days, setLast7days] =  useState({});

  const [currentPage, setCurrentPage] = useState<number>(2);
  const [coinPerPage, setCoinPerPage] = useState<number>(50)
  const lastPostIndex: number = currentPage * coinPerPage;
  const firstPostIndex: number = lastPostIndex - coinPerPage;
  const currentCoins: ICoinData[] = coinData.slice(firstPostIndex, lastPostIndex);

useEffect (() => {
  const fetchData = async () => {
    try{
      const response: AxiosResponse = await axios.post("https://api.livecoinwatch.com/coins/list",
      {
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 100,
        meta: true,
      },{
        headers:{
          "content-type": "application/json",
          "x-api-key": "3a724224-1dad-4ae5-923d-166be3c7f62e",
        },
      }
      );
      const data = response.data;
      console.log('coindata')
      console.log(data)
      setCoinData(data)
      console.log(data[0].code)
    } catch(error){
      console.error(`error is ${error}`)
    }
  };

  //setInterval(fetchData, 3000);
  fetchData();
},
[]);

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
          "x-api-key": "3a724224-1dad-4ae5-923d-166be3c7f62e",
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
  console.log("7 days data")
},
[]);

  return (
    <coinDataContext.Provider value={coinData}>
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
            {currentCoins.map((coin, index) => {
              return (
                <tr key={coin.code} className="my-4 font-normal">
                  <td>{coin.rank}</td>
                  {/* <Link href={`/asset-details/${coin.code}`}> */}
                  <Link href={`/asset-details/${coin.code}`}>
                    <td className="flex items-center justify-center">
                      <img src={coin.webp32} alt={coin.name}/>
                      <span className="text-sm flex flex-col ml-2">
                      <span>{coin.name}</span>
                      <span className="c-grey text-gray-500">{coin.code}</span>
                      </span>
                    </td>
                  </Link>
                  <td>${coin.rate}</td>
                  <td>{coin.delta.day}</td>
                  <td>{coin.delta.week}</td>
                  <td>${coin.cap}</td>
                  <td>${coin.volume}</td>
                  <td>{coin.circulatingSupply}</td>
                  <td>{coin.rate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination 
        totalPosts = {coinData.length}
        coinPerPage = {coinPerPage}
        setCurrentPage = {setCurrentPage} 
        currentPage = {currentPage}
        />
        <p>Showing {firstPostIndex + 1} - {lastPostIndex} out of {coinData.length}</p>
      </div>
    </coinDataContext.Provider>
  );
};

export default CoinsTable;
