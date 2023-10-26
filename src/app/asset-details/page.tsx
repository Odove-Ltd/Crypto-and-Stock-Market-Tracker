import React, {useEffect, useState} from 'react';
import TopBar from './top-bar/TopBar';
import AssetSummary from './asset-summary/AssetSummary';
import AssetChart from './asset-chart/AssetChart';
import AssetMarkets from './asset-markets/AssetMarkets';
import AssetAbout from './asset-about/AssetAbout';
import AssetNews from './asset-news/AssetNews';
import {seedTopBarData, seedAssetAbout, TopBarDataType} from "@/app/utils/seed-data/seed-asset-details";

interface Props {
    seedTopBarData: TopBarDataType;
    seedAssetAbout: string[];
}

const AssetDetails: React.FC<Props> = ({ seedTopBarData, seedAssetAbout }) => {

    return (
        <div className="flex flex-col px-20">
            <TopBar topBarData={seedTopBarData}/>
            <AssetSummary />
            <AssetChart />
            <AssetMarkets />
            <AssetAbout topBarData={seedTopBarData} assetAbout={seedAssetAbout} />
            <AssetNews topBarData = {seedTopBarData}/>
        </div>
    );
};

export default AssetDetails;