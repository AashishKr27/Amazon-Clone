/* eslint-disable no-unused-vars */
import React from "react";
import { logo } from "../../assets/index";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";

const Header = () => {
  return (
    <div>
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center">
        <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>

        <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <LocationOnOutlinedIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Delhi
            </span>
          </p>
        </div>

        <div className="h-10 rounded-md flex flex-grow relative">
          <span className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md">
            All <span></span>
            <ArrowDropDownOutlined />
          </span>
          <input className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2" type="text"/>
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounder-br-md">
            <Search />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
