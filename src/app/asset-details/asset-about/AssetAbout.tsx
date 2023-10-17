import React, {useEffect, useState} from 'react';
import { assetDetailsContainerClass } from '@/app/utils/styling/tempTWStyles';


interface Props {
    // Define props here
}

const AssetAbout: React.FC<Props> = (props) => {
    // Component logic here

    return (
        <div className={`${assetDetailsContainerClass}`}>Asset About Container</div>
    );
};

export default AssetAbout;
