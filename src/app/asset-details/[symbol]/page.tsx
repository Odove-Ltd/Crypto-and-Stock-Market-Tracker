'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import AssetTable from '../top-bar/AssetTable';
import AssetPriceChart from '../AssetPriceChart';

const CoinSymbolPage = ()=>{
    const symbol: string = useParams().symbol.toString();
    return(
        <div>
            <AssetTable symbol ={symbol}/>
            <AssetPriceChart symbol = {symbol}/>
        </div>
    )
}

export default CoinSymbolPage;