"use client";
import React, { useEffect, useState } from "react";
import Trending from "./Trending";
import Overview from "./Overview";
import BiggestGainers from "./BiggestGainers";
import RecentlyAdded from "./RecentlyAdded";
import TopText from "./TopText";
import CoinsTable from "./coins-table";
import axios from "axios";
import { ICoinData } from "../types/coin.data.type";
const Dashboard: React.FC = () => {
  const now = Date.now();
  const startTimestamp = now - 7 * 24 * 60 * 60 * 1000;

  const [coinData, setCoinData] = useState<ICoinData[]>([]);
  const [last7days, setLast7days] = useState({});

  const [currentPage, setCurrentPage] = useState<number>(2);
  const [coinPerPage, setCoinPerPage] = useState<number>(50);
  const lastPostIndex: number = currentPage * coinPerPage;
  const firstPostIndex: number = lastPostIndex - coinPerPage;
  const currentCoins: ICoinData[] = coinData.slice(
    firstPostIndex,
    lastPostIndex
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.livecoinwatch.com/coins/list",
          {
            currency: "USD",
            sort: "rank",
            order: "ascending",
            offset: 0,
            limit: 100,
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
        console.log("coindata");
        console.log(data);
        setCoinData(data);
        console.log(data[0].code);
      } catch (error) {
        console.error(`error is ${error}`);
      }
    };

    //setInterval(fetchData, 3000);
    fetchData();
  }, []);

  useEffect(() => {
    const fetchLast7daysData = async () => {
      try {
        const response = await axios.post(
          "https://api.livecoinwatch.com/coins/single/history",
          {
            currency: "USD",
            code: "BTC",
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
      } catch (error) {
        console.error(`Didn't work ${error}`);
      } finally {
        console.log("data");
      }
    };

    fetchLast7daysData();
    console.log("7 days data");
  }, []);
  return (
    <div className="first-line:">
      <TopText />
      <div className="grid grid-cols-4 justify-center gap-8 items-center">
        <Trending />
        <Overview />
        <BiggestGainers />
        <RecentlyAdded />
      </div>
      <CoinsTable currentCoins={currentCoins} coinData={coinData} />
    </div>
  );
};

export default Dashboard;
