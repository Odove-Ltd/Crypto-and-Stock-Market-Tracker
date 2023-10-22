import React, {useEffect, useState} from 'react';
import { assetDetailsContainerClass } from '@/app/utils/styling/tempTWStyles';


interface Props {
}

const AssetAbout: React.FC<Props> = (props) => {

    return (
        <div className={`${assetDetailsContainerClass}`}>Asset About Container</div>
    );
};

export default AssetAbout;
