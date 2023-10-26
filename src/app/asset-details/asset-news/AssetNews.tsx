import React, {useEffect, useState} from 'react';
import { assetDetailsContainerClass } from '@/app/utils/styling/tempTWStyles';
import { TopBarDataType } from '@/app/utils/seed-data/seed-asset-details';

interface Props{
    topBarData: TopBarDataType;
}

const AssetNews: React.FC<Props> = ({topBarData}) => {

    return (
        <div className='mb-7 mt-5'>
            <h1><strong>{topBarData.assetName.toUpperCase()} LATEST NEWS</strong></h1>
        </div>
    );
};

export default AssetNews;