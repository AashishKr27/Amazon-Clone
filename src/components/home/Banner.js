/* eslint-disable no-unused-vars */
"use-client"
import React, { useState } from "react";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgFour,
  bannerImgFive,
} from "../../assets/index";

const Banner = () => {
    const [doActive, setDoActive] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange :(prev, next) => {
        setDoActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "210px",
        }}
      >
        <ul style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
            i === doActive ? {
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          background: "#131921",
          padding: "8px 0",
          cursor: "pointer",
          border: "1px solid #f3a847",
        }
        :{
            width: "30px",
          height: "30px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          background: "#232F3E",
          padding: "8px 0",
          cursor: "pointer",
          border: "1px solid white",
        }
    }
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="w-full">
      <div className="w-full h-full relative">
        <Slider {...settings}>
          <img src={bannerImgOne} alt="bannerImgOne" />
          <img src={bannerImgTwo} alt="bannerImgTwo" />
          <img src={bannerImgThree} alt="bannerImgThree" />
          <img src={bannerImgFour} alt="bannerImgFour" />
          <img src={bannerImgFive} alt="bannerImgFive" />
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
