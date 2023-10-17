import React, {useEffect, useState} from 'react';
import TopBar from './top-bar/TopBar';
import AssetSummary from './asset-summary/AssetSummary';
import AssetChart from './asset-chart/AssetChart';
import AssetMarkets from './asset-markets/AssetMarkets';
import AssetAbout from './asset-about/AssetAbout';
import AssetNews from './asset-news/AssetNews';

interface Props {
    // Define props here
}

const AssetDetails: React.FC<Props> = (props) => {
    // Component logic here

    return (
        <div className="flex flex-col px-20">
            <TopBar />
            <AssetSummary />
            <AssetChart />
            <AssetMarkets />
            <AssetAbout />
            <AssetNews />
        </div>
    );
};

export default AssetDetails;
