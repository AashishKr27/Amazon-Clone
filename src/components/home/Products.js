/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { ShoppingCart, Star } from "@mui/icons-material";
import { Api } from "@mui/icons-material";
import { ArrowCircleRight } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";

const Products = () => {
  const data = useLoaderData();
  const productsData = data.data;
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10">
      {productsData.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
        >
          <span className="text-sm capitalize font-semibold italic absolute top-2 right-2 text-gray-500">
            {item.category}
          </span>
          <div className="w-full h-auto flex items-center justify-center relative group">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="ProductImg"
            />
            <ul className="w-full h-36 bg-gray-100 absolute -bottom-[170px] flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-1 border-r group-hover:bottom-0 group-hover:duration-500">
              <li className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400 hover:border-b-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
                Compare{" "}
                <span>
                  <Api />
                </span>
              </li>
              <li className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400 hover:border-b-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
                Add to Cart{" "}
                <span>
                  <ShoppingCart />
                </span>
              </li>
              <li className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400 hover:border-b-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
                View Details{" "}
                <span>
                  <ArrowCircleRight />
                </span>
              </li>
              <li className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400 hover:border-b-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
                Add to Wish List{" "}
                <span>
                  <Favorite />
                </span>
              </li>
            </ul>
          </div>
          <div className="px-4 z-10 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                {item.title.substring(0, 20)}
              </h2>
              <p>{item.price}</p>
            </div>
            <div>
              <p className="text-sm mb-1">
                {item.description.substring(0, 100)}....
              </p>
              <div className="text-yellow-500">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
              Add to Cart{" "}
              <span className="text-center my-auto">
                <ShoppingCart />
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
