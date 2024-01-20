"use client";
import React, { use, useEffect, useState } from "react";
import { assetDetailsContainerClass } from "@/app/utils/styling/tempTWStyles";
import { IAssetTopTableData } from "@/app/models/coin.data.type";
import FetchAssetDetailsData from "@/app/services/assetDetails/assetDetailsServices";

interface Prop {
    symbol: string;
}

const AssetTable = ({symbol}: Prop) => {

    const [coinUSDData, setCoinUSDData] = useState<IAssetTopTableData>({
        hour: 0,
        day: 0,
        week: 0,
        month: 0,
        quarter: 0,
        year:0
    });
    const [coinBTCData, setCoinBTCData] = useState<IAssetTopTableData>({
        hour: 0,
        day: 0,
        week: 0,
        month: 0,
        quarter: 0,
        year:0
    });
    const [coinETHData, setCoinETHDData] = useState<IAssetTopTableData>({
        hour: 0,
        day: 0,
        week: 0,
        month: 0,
        quarter: 0,
        year:0
    });
    const [circulatingSupply, setCirculatingSupply] = useState<number>();
    const [totalSupply, setTotalSupply] = useState<number>();
    const [maxSupply, setMaxSupply] = useState<number>();
    const [liquidity, setLiquidity] = useState<number>();
    const [allTimeHigh, setAllTimeHigh] = useState<number>();
    const [coinName, setCoinName] = useState<string>();
    const [coinLogo, setCoinLogo] = useState<string>();
    const [usdPrice, setUsdPrice] = useState<number>();
    const [btcPrice, setBtcPrice] = useState<number>();


    useEffect(()=>{
        const fetchData = async () =>{
            const usdData = await FetchAssetDetailsData("USD", symbol);
            setCirculatingSupply(usdData.circulatingSupply);
            setTotalSupply(usdData.totalSupply);
            setMaxSupply(usdData.maxSupply);
            setLiquidity(usdData.liquidity);
            setAllTimeHigh(usdData.allTimeHighUSD);
            setCoinUSDData(usdData.delta)
            setCoinName(usdData.name.toUpperCase());
            setCoinLogo (usdData.webp32);
            setUsdPrice(usdData.rate.toFixed(2));

            const btcData = await FetchAssetDetailsData("BTC",  symbol);
            setCoinBTCData(btcData.delta)
            setBtcPrice(btcData.rate.toFixed(8));

            const ethData = await FetchAssetDetailsData("ETH",  symbol);
            setCoinETHDData(ethData.delta)
            console.log(ethData)
        };
        fetchData();
}, [])

    return (
        <div>
            <div className="flex">
                <img src={coinLogo} />
                <span className="text-lg flex flex-col ml-2 text-black">
                    <span>{coinName}</span>
                    <span className="text-sm text-gray-500">{symbol}</span>
                </span>
                <span className="text-lg flex flex-col ml-2 c-grey text-black">
                    <span>${usdPrice}</span>
                    <span className="text-sm text-gray-500">{btcPrice}BTC</span>
                </span>
            </div>
          {/* <hr className="my-4 border-gray-800 w-full" /> */}
          <table className="border-none text-black text-center table-fixed w-full">
            <thead>
              <tr>
                <th>1H USD</th>
                <th>24H USD</th>
                <th>7D USD</th>
                <th>30D USD</th>
                <th>90D USD</th>
                <th>1Y USD</th>
                <th></th>
                <th>CIRC. SUPPLY</th>
                <th>TOTAL SUPPLY</th>
                <th>MAX SUPPLY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.entries(coinUSDData).map(([key, value], index) => (
                  <td key={index}>{value.toFixed(2)}%</td>
                ))}
                <td></td>
                <td>{circulatingSupply}</td>
                <td>{totalSupply}</td>
                <td>{maxSupply}</td>
              </tr>
            </tbody>
            <thead>
                <tr>
                    <th>1H BTC</th>
                    <th>24H BTC</th>
                    <th>7D BTC</th>
                    <th>30D BTC</th>
                    <th>90D BTC</th>
                    <th>1Y BTC</th>
                    <th></th>
                    <th>Liquidity</th>
                    <th>All Time High</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {Object.entries(coinBTCData).map(([key, value], index)=>(
                        <td key={index}>{value}</td>
                    ))}
                    <td></td>
                    <td>{liquidity}</td>
                    <td>${allTimeHigh?.toFixed(2)}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th>1H ETH</th>
                    <th>24H ETH</th>
                    <th>7D ETH</th>
                    <th>30D ETH</th>
                    <th>90D ETH</th>
                    <th>1Y ETH</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {Object.entries(coinETHData).map(([key, value], index) =>(
                        <td key={index}>{value}</td>
                    ))}
                </tr>
            </tbody>
          </table>
        </div>
      );
    };
    
    export default AssetTable;