'use client'
import React from "react";
import { useState } from "react";
import {BsStarFill, BsStar} from 'react-icons/bs';
import Link from "next/link";
import { ICoinData } from "../types/coin.data.type";

//Creating coin row so each row in your table has its own state for the favorite button

interface Prop{
    coin: ICoinData;
}
const CoinRow: React.FC<Prop> = ({coin}) =>{
    const [isFavourite, setIsFavourite] = useState<boolean>(false);

    const handleFavouriteToggle = () =>{
        setIsFavourite((prev) => !prev);
    }
    return(
        <tr key={coin.code} className="my-4 font-normal">
            <td>
                <span>
                    <button onClick={handleFavouriteToggle} className="text-yellow-500">{isFavourite ? <BsStarFill/> : <BsStar/>}
                    </button>
                   <span className="ml-3">{coin.rank}</span>
                </span>
            </td>
            <Link href={`/asset-details/${coin.code}`}>
            <td className="flex items-center justify-center">
                <img src={coin.webp32} alt={coin.name}/>
                <span className="text-sm flex flex-col ml-2">
                {coin.name}
                <span className="c-grey text-gray-500">{coin.code}</span>
                </span>
            </td>
            </Link>
            <td>${coin.rate}</td>
            <td>{coin.delta.day}</td>
            <td>{coin.delta.week}</td>
            <td>${coin.cap}</td>
            <td>${coin.volume}</td>
            <td>{coin.circulatingSupply}</td>
            <td>{coin.rate}</td>
        </tr>
    )
}

export default CoinRow;