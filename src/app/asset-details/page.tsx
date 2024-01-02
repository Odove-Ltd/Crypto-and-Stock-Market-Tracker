import React, {useEffect, useState} from 'react';
import TopBar from './top-bar/TopBar';
import AssetSummary from './asset-summary/AssetSummary';
import AssetChart from './AssetChart';
import AssetMarkets from './AssetMarkets';
import AssetAbout from './AssetAbout';
import AssetNews from './asset-news/AssetNews';
import {seedTopBarData, seedAssetAbout, TopBarDataType} from "@/app/utils/seed-data/seed-asset-details";
import AssetTable from './top-bar/AssetTable';

const AssetDetails: React.FC = () => {

    return (
        <div className="flex flex-col px-20">
            <TopBar />
            {/* <AssetTable/> */}
            <AssetSummary />
            <AssetChart />
            <AssetMarkets />
            <AssetAbout topBarData={seedTopBarData} assetAbout={seedAssetAbout} />
            <AssetNews topBarData = {seedTopBarData}/>
        </div>
    );
};

export default AssetDetails;
