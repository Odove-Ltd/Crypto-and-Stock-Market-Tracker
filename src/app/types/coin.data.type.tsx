import { Dispatch, SetStateAction } from "react";

export interface ICoinData{
    code: string;
    rate: number;
    rank:number;
    volume: number;
    cap: number;
    webp32: string;
    name: string;
    circulatingSupply: number
    delta: {
      day: number;
      week: number;
    };
  };

  export interface IPaginationProps{
    totalPosts: number;
    coinPerPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    currentPage: number;
}
