import React from "react";
import { fetchCoinData } from "../lib/action";
import Search from "../ui/search";
import Image from "next/image";
import { ICoinData } from "../types/coin.data.type";
import Overview from "./overview";
import Overviews from "./overview";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const currentCoins = await fetchCoinData();

  const query = searchParams?.query || "";
  const filteredCoins = currentCoins?.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase())
  );

  console.log(currentCoins);
  return (
    <div className="my-10 lg:px-10 w-full">
      {/* <Search placeholder="Search coin..." /> */}
      <div>{/* <Overviews /> */}</div>
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
          {filteredCoins?.map((coin) => {
            return (
              <tr key={coin.code} className="my-4 font-normal">
                <td>{coin.rank}</td>
                <td className="flex items-center justify-center">
                  <img
                    src={coin.webp32}
                    width={32}
                    height={32}
                    alt={coin.name}
                  />
                  <span className="text-sm flex flex-col ml-2">
                    <span>{coin.name}</span>
                    <span className="c-grey text-gray-500">{coin.code}</span>
                  </span>
                </td>
                <td>${coin.rate}</td>
                <td>{coin.delta.day}</td>
                <td>{coin.delta.week}</td>
                <td>${coin.cap}</td>
                <td>${coin.volume}</td>
                <td>{coin.circulatingSupply}</td>
                <td>{coin.rate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <Pagination
          totalPosts={coinData.length}
          coinPerPage={coinPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        /> */}
    </div>
  );
};

export default Page;
