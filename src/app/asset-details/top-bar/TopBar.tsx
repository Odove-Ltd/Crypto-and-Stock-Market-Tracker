"use client";
import React, { useEffect, useState } from "react";
import { assetDetailsContainerClass } from "@/app/utils/styling/tempTWStyles";
import { seedTopBarData } from "@/app/utils/seed-data/seed-asset-details";
import { FaEthereum } from "react-icons/fa";

interface TopBarDataType {
    assetId: number;
    assetName: string;
    assetSymbol: string;
    assetLogo: string;
    marketCap: number;
    volume: number;
    volPerMarketCap: number;
    AllTimeHigh: number;
    currentPrice: CurrentPriceType;
}

interface CurrentPriceType {
    usd: number;
    btc: number;
}

interface Props {
    topBarData?: TopBarDataType;
}

const TopBar: React.FC<Props> = ({ topBarData = seedTopBarData }) => {
    // Component logic here

    const [initialTopBarData, setTopBarData] =
        useState<TopBarDataType>(topBarData);

    return (
        <div className={`${assetDetailsContainerClass} flex flex-row items-start m-0 p-0`}>
            <div className=" h-10 flex justify-items-center mx-5 relative">
                <img className="justify-items-center"  src={topBarData.assetLogo} alt="logo" />
            </div>
            <div className=" flex flex-col mx-5">
                <ul>{topBarData.assetName.toUpperCase()}</ul>
                <ul>{topBarData.assetSymbol.toUpperCase()}</ul>
            </div>
            <div className="">
                <ul>${topBarData.currentPrice.usd}</ul>
                <ul>{topBarData.currentPrice.btc}BTC</ul>
                </div>
        </div>
    );
};

export default TopBar;


