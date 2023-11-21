import React from "react";
import { coinDataHeader } from "./data";

const CoinsTable = () => {
  return (
    <div className="my-10 lg:px-10">
      <table className="border-collapse  border-l-0 border-r-0 text-black border-black text-center table-fixed w-full">
        <thead>
          <tr className=" ">
            <th className="">Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>24hr</th>
            <th>7dys</th>
            <th>Market Cap</th>
            <th>Volume (24hr)</th>
            <th>Circuling Supply</th>
            <th>Last 7 days</th>
          </tr>
        </thead>

        <tbody>
          {coinDataHeader.map((coin) => {
            return (
              <tr key={coin.name} className=" my-4 font-normal">
                <td>{coin.rank}</td>
                <td>{coin.name}</td>
                <td>{coin.price}</td>
                <td>{coin.xxivhr}</td>
                <td>{coin.sevenDays}</td>
                <td>{coin.marketCap}</td>
                <td className="text-sm flex flex-col">
                  <span>{coin.volume.price}</span>
                  <span className=" text-xs ">{coin.volume.vol}</span>
                </td>
                <td>{coin.circulingSupply}</td>
                <td>{coin.last7days}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoinsTable;
