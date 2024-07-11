/* eslint-disable no-unused-vars */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import SideNavContent from "./SideNavContent";
import { motion } from "framer-motion";

const HeaderBottom = () => {
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, [ref, sidebar]);
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white">
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="mt-1 px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 gap-1"
        >
          {" "}
          <Menu /> All
        </li>
        <li className="mt-1 px-2 h-[80%] hidden md:inline-flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Todays' Deals
        </li>
        <li className="mt-1 px-2 h-[80%] hidden md:inline-flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Customer Service
        </li>
        <li className="mt-1 px-2 h-[80%] hidden md:inline-flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Gift Cards
        </li>
        <li className="mt-1 px-2 h-[80%] hidden md:inline-flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Registry
        </li>
        <li className="mt-1 px-2 h-[80%] hidden md:inline-flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          Sell
        </li>
      </ul>
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-[350px] w-[80%] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex itesm-center gap-4">
                <AccountCircle />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>
              <SideNavContent
                title="Digital Content & Services"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon Live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact Us"
              />
              <span
                onClick={() => setSidebar(false)}
                className="cursor-pointer absolute top-0 md:left-[360px] left-[82%] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-600 hover:text-white duration-300"
              >
                <Close />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
