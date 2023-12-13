'use client'
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ICoinData } from "../types/coin.data.type";
import { coinDataContext } from "../context/coin-data.context";

const now = Date.now();
const sevenDaysAgoTimestamp = now - (7 * 24 * 60 * 60 * 1000);

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
      console.log('coindata')
      console.log(data)
      return data;
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
        start: sevenDaysAgoTimestamp,
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

