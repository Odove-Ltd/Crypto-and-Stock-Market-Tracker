import React, {useEffect, useState} from 'react';
import { assetDetailsContainerClass } from '@/app/utils/styling/tempTWStyles';


interface Props {

}

const AssetChart: React.FC<Props> = (props) => {

    return (
        <div className={`${assetDetailsContainerClass}`}>Asset Charts Container</div>
    );
};

export default AssetChart;
