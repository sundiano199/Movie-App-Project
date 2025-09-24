import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import menu from "../assets/menu-icon.png";
import movies from "../assets/movies.png";
import tv from "../assets/tv.png";
import bookmark from "../assets/bookmark.png";
import profile from "../assets/profile.png";
import search from "../assets/search.png";
import profile2 from "../assets/profile2.png"

const DashboardLayout = () => {
  return (
    <div className="md:flex  ">
      <div className="flex justify-between md:flex-col  md:my-[32px] md:ml-[32px] md:mr-[36px] bg-[#161D2F] rounded-none md:rounded-[20px] md:px-[28px] px-[16px] py-[18px] md:py-0 ">
        <div className="">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="md:flex md:mt-[35px] md:mx-auto md:mb-[75px] "
            />{" "}
          </Link>
        </div>
        <div
          className="flex justify-between items-center
         gap-5 md:block"
        >
          <img src={menu} alt="" className="md:mx-auto md:pb-[40px]" />
          <img src={movies} alt="" className="md:mx-auto md:pb-[40px]" />
          <img src={tv} alt="" className="md:mx-auto md:pb-[40px]" />
          <img src={bookmark} alt="" className="md:mx-auto md:pb-[552px]" />
        </div>
        <div className="">
          <img src={profile} alt="" className="h-6 md:hidden md:pb-[32px]" />
          <img
            src={profile2}
            alt=""
            className="hidden md:block  md:pb-[32px]"
          />
        </div>
      </div>
      <div className="md:mt-[64px] w-full">
        <div className="flex gap-3 items-center md:my-0 my-[24px] md:px-0 px-[16px]">
          <img src={search} alt="" />
          <input
            type="text"
            placeholder="Search for movies or TV series"
            className="w-100 placeholder:text-[16px]  md:placeholder:text-[24px] placeholder:font-light"
          />
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
