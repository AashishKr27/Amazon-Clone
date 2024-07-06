/* eslint-disable no-unused-vars */
import React from "react";
import { Menu } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";

const HeaderBottom = () => {
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white">
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li className="mt-1 px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 gap-1">
          {" "}
          <Menu /> All
        </li>
        <li className="mt-1 px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Todays' Deals
        </li>
        <li className="mt-1 px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Customer Service
        </li>
        <li className="mt-1 px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Gift Cards
        </li>
        <li className="mt-1 px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Registry
        </li>
        <li className="mt-1 px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Sell
        </li>
      </ul>
    </div>
  );
};

export default HeaderBottom;
