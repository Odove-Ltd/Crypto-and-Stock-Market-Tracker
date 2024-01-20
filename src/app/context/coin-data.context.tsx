import {createContext, useContext, useState} from 'react';
import { ICoinData } from '../models/coin.data.type';

export const coinDataContext = createContext<ICoinData[]>([]);

// const useCoinData = ()=>{
//     const [cointData, setCoinData] = useState(useContext(coinDataContext));

// }