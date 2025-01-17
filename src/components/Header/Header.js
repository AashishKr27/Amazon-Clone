/* eslint-disable no-unused-vars */
"use-client";
import React, { useState } from "react";
import { logo } from "../../assets/index";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const allItems = [{}];
  const products = useSelector((state) => state.amazonReducer.products);
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center">
        <Link to="/">
          <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
            <img className="w-24 mt-2" src={logo} alt="logo" />
          </div>
        </Link>

        <div className="px-2 h-[80%] items-center border border-transparent hover:border-white cursor-pointer duration-100 hidden mdl:inline-flex">
          <LocationOnOutlinedIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Delhi
            </span>
          </p>
        </div>

        <div className="h-10 rounded-md hidden lgl:flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All <span></span>
            <ArrowDropDownOutlined />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  All Departments
                </li>
                <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Arts & Crafts
                </li>
                <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Automotive
                </li>
                <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Baby
                </li>
                <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Beauty & Personal Care
                </li>
                <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Books
                </li>
                <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Boys' Fashion
                </li>
                <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Computers
                </li>
                <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Deals
                </li>
                <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Digital Music
                </li>
                <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Electronics
                </li>
                <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                  Girls' Fashion
                </li>
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounder-br-md">
            <Search />
          </span>
        </div>
        <Link to="/signin">
          <div className="px-2 h-[80%] flex flex-col justify-center border border-transparent hover:border-white cursor-pointer duration-100">
            <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">
              Hello, Sign in
            </p>
            <p className="text-sm font-semibold -mt-1 text-white hidden mdl:inline-flex">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownOutlined />
              </span>
            </p>
          </div>
        </Link>
        <div className="hidden lgl:flex flex-col items-start justify-center px-2 h-[80%] border border-transparent hover:border-white cursor-pointer duration-100">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-white">& Orders</p>
        </div>
        <Link to="/cart">
          <div className="flex flex-col items-start justify-center px-2 h-[80%] border border-transparent hover:border-white cursor-pointer duration-100 relative">
            <ShoppingCart />
            <p className="text-xs text-lightText font-semibold">
              Cart{" "}
              <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {products.length}
              </span>
            </p>
          </div>
        </Link>
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
