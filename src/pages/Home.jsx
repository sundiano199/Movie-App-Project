import React from "react";
import trending from "../assets/trending-1.png";
import recommmeded from "../assets/recommended.png";
import { useEffect, useState } from "react";
import { firstData, secondData } from "./data";
import bookmark from "../assets/icon-bookmark.png";
import { IoPlayCircleOutline } from "react-icons/io5";
import ButtonHover from "./ButtonHover";
import ButtonHover2 from "./ButtonHover2";

const Home = () => {
  const [hover, setHover] = useState(false)
  return (
    <div className="w-full overflow-x-hidden max-w-full ">
      <div className="mt-[34px] pl-[16px] md:pl-0">
        <h1 className="text-[32px] font-light  mb-[25px]  leading-[100%] ">
          Trending
        </h1>
        <div className="carousel carousel-end w-full max-w-full mb-[40px] inset-0 ">
          {firstData.map((data) => {
            return (
              <div className="carousel-item relative cursor-pointer group ">
                <img
                  src={data.img}
                  alt=""
                  className=" h-[230px] w-[470px] rounded-[8px] mr-[40px]"
                />
                {/* This is used for the overlay effect and it worked because the parent container has been grouped */}
                <div
                  className="absolute inset-0 bg-black/40 rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300
        "
                ></div>
                <ButtonHover />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="py-2 pl-1 pr-4 rounded-3xl flex items-center gap-2 bg-white/30">
                    <IoPlayCircleOutline size={30} />
                    <p>Play</p>
                  </div>
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
              <div key={data.id} className="relative">
                <img src={data.img} alt="" className="w-[164px] md:w-[280px]" />
                <ButtonHover2 />
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
