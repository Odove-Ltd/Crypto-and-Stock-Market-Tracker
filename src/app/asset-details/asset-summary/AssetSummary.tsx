'use client'
import React, { useEffect, useState } from "react";
import { assetDetailsContainerClass } from "@/app/utils/styling/tempTWStyles";
import {seedAssetSummary, seedTopBarData, AssetSummaryType, TopBarDataType} from "@/app/utils/seed-data/seed-asset-details";
//import { FaEthereum } from 'react-icons/fa';

interface Props {
    topBarData?: TopBarDataType;
    assetSummary?: AssetSummaryType[];
}

const AssetSummary: React.FC<Props> = ({topBarData = seedTopBarData,  assetSummary = seedAssetSummary}) => {
    // Component logic here

    const [initialTopBarData, setTopBarData] = useState<TopBarDataType>(topBarData);
    const [initialAssetSummary, setAssetSummary] = useState(assetSummary);

    return (
        <div className={`${assetDetailsContainerClass}`}>
            Asset Summary Container
        </div>
    );
};

export default AssetSummary;
