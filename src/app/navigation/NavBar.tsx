'use client'
import React, {useEffect, useState} from 'react';
import {buttonClass1} from '../utils/styling/tempTWStyles';
import Search from './Search';
import { coinDataContext } from '../context/coin-data.context';
import AssetDetails from '../asset-details/page';

interface Props {
    // Define props here
}


const NavBar: React.FC<Props> = (props) => {
    // Component logic here

    return (
            <div className='flex flex-row w-full justify-center p-5'>
                <a
                className={buttonClass1}
                href="/dashboard">
                    Cryptocurrency
                </a>
                <a
                className={buttonClass1}
                href="/dashboard">
                    Exchanges
                </a>
                <a
                className={buttonClass1}
                href="/dashboard">
                    Watchlist
                </a>
                <a
                className={buttonClass1}
                href="/dashboard">
                    News
                </a> 
                {/* <Route path="/asset-details/:coinCode" element={<AssetDetails />} /> */}
                <Search/>
            </div>
    );
};

export default NavBar;