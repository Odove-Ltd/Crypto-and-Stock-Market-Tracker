'use client'
import React from "react";
import { useEffect } from "react";
import axios, {AxiosResponse} from 'axios';
import { ICoinData } from "../../models/coin.data.type";
import { coinDataContext } from "../../context/coin-data.context";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getCoinTableData = async()=>{
        try{
          const response = await axios.post("https://api.livecoinwatch.com/coins/list",
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
              "x-api-key": apiKey,
            }}
          );
          const responseData = response.data;
          console.log("Does this help"+ responseData)
          return responseData;
        } 
        catch(error){
          console.error(`An error occured: ${error}`)
        }
      };

