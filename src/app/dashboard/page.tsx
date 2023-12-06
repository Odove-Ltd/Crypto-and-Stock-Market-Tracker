import React, { useEffect, useState } from "react";
import Trending from "./Trending";
import Overview from "./Overview";
import BiggestGainers from "./BiggestGainers";
import RecentlyAdded from "./RecentlyAdded";
import TopText from "./TopText";
import CoinsTable from "./coins-table";

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
