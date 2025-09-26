import React from "react";
import trending from "../assets/trending-1.png";
import recommmeded from "../assets/recommended.png";
import { Link } from "react-router-dom";
import { firstData, secondData } from "./data";

const Movies = () => {
  return (
    <div className="w-full overflow-x-hidden max-w-full ">
      <div className="mt-[34px] pl-[16px] md:pl-0">
        <h1 className="text-[32px] font-light  mb-[25px]  leading-[100%] ">
          Movies
        </h1>
        <div className="carousel carousel-end w-full max-w-full mb-[40px] ">
          {firstData.map((data) => {
            return (
              <div className="carousel-item">
                <img
                  src={data.img}
                  alt=""
                  className="h-[230px] w-[470px] rounded-[8px] mr-[40px]"
                />
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

export default Movies;
