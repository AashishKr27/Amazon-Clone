import React from "react";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-full xl:-mt-36 -mt-10 py-10">
        <Products />
      </div>
    </div>
  );
};

export default Home;
