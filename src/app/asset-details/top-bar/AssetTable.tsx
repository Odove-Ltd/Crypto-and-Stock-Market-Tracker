"use client";
import React, { use, useEffect, useState } from "react";
import { assetDetailsContainerClass } from "@/app/utils/styling/tempTWStyles";
import { IAssetTopTableData } from "@/app/types/coin.data.type";
import FetchAssetDetailsData from "@/app/services/assetDetailsServices";
import { useSearchParams } from 'next/navigation';
import axios from 'axios';


const AssetTable: React.FC = () => {

    // const router = useRouter()
    // //const { id } = router.query
    // // const coinCodeString = id as string;
    // const coinCodeString = router.query.coinCode as string;

    const searchParams = useSearchParams();
    const coinCodeString = searchParams.get('coinCode') as string; // Access the coin code from the query

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


    useEffect(()=>{
        const fetchData = async () =>{
            const usdData = await FetchAssetDetailsData("USD", coinCodeString);
            setCirculatingSupply(usdData.circulatingSupply);
            setTotalSupply(usdData.totalSupply);
            setMaxSupply(usdData.maxSupply);
            setLiquidity(usdData.liquidity);
            setAllTimeHigh(usdData.allTimeHighUSD);
            setCoinUSDData(usdData.delta)

            const btcData = await FetchAssetDetailsData("BTC", coinCodeString);
            setCoinBTCData(btcData.delta)

            const ethData = await FetchAssetDetailsData("ETH", coinCodeString);
            setCoinETHDData(ethData.delta)
            console.log(ethData)
        };
        fetchData();
}, [])

    // const fetchAssetData = async (currency: string, code: string)=>{
    //     try{
    //         const response = await axios.post ("https://api.livecoinwatch.com/coins/single",{
    //             currency: currency.toLocaleUpperCase(),
    //             code: code.toLocaleUpperCase(),
    //             meta: true,
    //         },{
    //             headers:{
    //                 "content-type": "application/json",
    //                 "x-api-key": "3a724224-1dad-4ae5-923d-166be3c7f62e",
    //             }
    //         })
    //         const responseData = response.data
    //         console.log(responseData)

    //         switch(currency.toLocaleUpperCase()){
    //             case "USD":
    //                 setCoinUSDData(responseData.delta)
    //                 break;
    //             case "BTC":
    //                 setCoinBTCData(responseData.delta)
    //                 break;
    //             case "ETH":
    //                 setCoinETHDData(responseData.delta)
    //                 break;
    //         }

    //         setCirculatingSupply(responseData.circulatingSupply);
    //         setTotalSupply(responseData.totalSupply);
    //         setMaxSupply(responseData.maxSupply);
    //         setLiquidity(responseData.liquidity);
    //         setAllTimeHigh(responseData.allTimeHighUSD);

    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // };

    // useEffect(()=>{
    //     fetchAssetData("USD", prop);
    //     fetchAssetData("BTC", prop);
    //     fetchAssetData("ETH", prop);
    // }, [])
  


    return (
        <div>
          <hr className="my-4 border-gray-800 w-full" />
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