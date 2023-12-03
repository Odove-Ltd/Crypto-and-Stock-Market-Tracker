import React, { useEffect, useState } from "react";
import Trending from "./trending/Trending";
import Overview from "./overview/Overview";
import BiggestGainers from "./biggest-gainers/BiggestGainers";
import RecentlyAdded from "./recently-added/RecentlyAdded";
import TopText from "./top-text/TopText";
import CoinsTable from "./coins-table/coins-table";

const Dashboard: React.FC = () => {
  return (
    <>
      <TopText />
      <div className="flex flex-row justify-center gap-12 items-center">
        <Trending />
        <Overview />
        <BiggestGainers />
        <RecentlyAdded />
      </div>
      <CoinsTable />
    </>
  );
};

export default Dashboard;
