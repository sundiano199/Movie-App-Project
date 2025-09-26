import React from "react";
import trending from "../assets/trending-1.png";
import recommmeded from "../assets/recommended.png";
import { useEffect, useState } from "react";
import { firstData, secondData } from "./data";
import bookmark from "../assets/bookmark.png"

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden max-w-full ">
      <div className="mt-[34px] pl-[16px] md:pl-0">
        <h1 className="text-[32px] font-light  mb-[25px]  leading-[100%] ">
          Trending
        </h1>
        <div className="carousel carousel-end w-full max-w-full mb-[40px] ">
          {firstData.map((data) => {
            return (
              <div className="carousel-item relative">
                <img
                  src={data.img}
                  alt=""
                  className=" h-[230px] w-[470px] rounded-[8px] mr-[40px]"
                />
                <button className="absolute right-15 cursor-pointer">
                  <img src={bookmark} alt="" className="black" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-[16px] md:px-0">
        <h1 className="text-[32px] font-light  mb-[25px]  leading-[100%] ">
          Recommended for you
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 md:pr-[36px]">
          {secondData.map((data) => {
            return (
              <div key={data.id}>
                <img src={data.img} alt="" className="w-[164px] md:w-[280px]" />
                
                <h3>{data.year}</h3>
                <h2>{data.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
