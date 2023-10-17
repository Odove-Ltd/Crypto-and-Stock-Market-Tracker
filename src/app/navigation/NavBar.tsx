import React, {useEffect, useState} from 'react';
import {buttonClass1} from '../utils/styling/tempTWStyles';

interface Props {
    // Define props here
}


const NavBar: React.FC<Props> = (props) => {
    // Component logic here

    return (
        <div className='flex flex-row w-full justify-center p-5'>
            <a
            className={buttonClass1}
            href="/">
                Home
            </a>
            <a
            className={buttonClass1}
            href="/asset-details">
                Asset Details
            </a>
        </div>
    );
};

export default NavBar;