'use client'
import React, { useEffect, useState } from "react";
import { assetDetailsContainerClass } from "@/app/utils/styling/tempTWStyles";
import {
    seedAssetSummary,
    seedTopBarData,
} from "@/app/utils/seed-data/seed-asset-details";
import { FaEthereum } from 'react-icons/fa';

//structure of the topBarData
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

//Structure of each item in the assetSummary
interface Changes {
    name: string;
    Changes: number;
}

interface Supply {
    name: string;
    value: number;
}

interface CurrentPriceType {
    usd: number;
    btc: number;
}

interface AssetSummaryItem {
    assetId: number;
    assetName: string;
    assetSymbol: string;
    assetLogo: string;
    usd: Changes[];
    btc: Changes[];
    eth: Changes[];
    supply: Supply[];
    range: Supply[];
    movement: Supply[];
}

interface Props {
    topBarData?: TopBarDataType;
    assetSummary?: AssetSummaryItem[];
}

const AssetSummary: React.FC<Props> = ({topBarData = seedTopBarData,  assetSummary = seedAssetSummary}) => {
    // Component logic here

    const [initialTopBarData, setTopBarData] = useState<TopBarDataType>(topBarData);
    const [initialAssetSummary, setAssetSummary] = useState(assetSummary);

    console.log(topBarData)
    console.log(assetSummary)

    return (
        <div className={`${assetDetailsContainerClass}`}>
            Asset Summary Container
        </div>
    );
};

export default AssetSummary;
