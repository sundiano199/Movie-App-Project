import React from "react";

import Logo from "../assets/logo.png";
import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import Menu from "../assets/menu-icon.svg?react";

import Movies from "../assets/movies.svg?react";
import Tv from "../assets/tv.svg?react";
import Bookmark from "../assets/bookmark.svg?react";
import profile from "../assets/profile.png";
import search from "../assets/search.png";
import profile2 from "../assets/profile2.png";

// note that i installed npm install -D vite-plugin-svgr package to be able to change svg color in active or inactive stage
const DashboardLayout = () => {
  console.log(useLocation());
  const isProfile = useLocation().pathname === "/dashboard/home"; // to set the pathname to dashboard/profile
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
         gap-5 md:flex-col md:mb-[552px]"
        >
          <NavLink to="/dashboard/" end>
            {({ isActive }) => (
              <Menu
                className={` md:mx-auto md:mb-[40px] ${
                  isActive ? "text-white" : "text-[#5A698F]"
                }`}
              />
            )}
          </NavLink>
          <NavLink to="/dashboard/movies">
            {({ isActive }) => (
              <Movies
                className={` md:mx-auto md:mb-[40px] ${
                  isActive ? "text-white" : "text-[#5A698F]"
                }`}
              />
            )}
          </NavLink>

          <NavLink to="/dashboard/tv-series">
            {({ isActive }) => (
              <Tv
                className={` md:mx-auto md:mb-[40px] ${
                  isActive ? "text-white" : "text-[#5A698F]"
                }`}
              />
            )}
          </NavLink>

          <NavLink to="/dashboard/bookmarked">
            {({ isActive }) => (
              <Bookmark
                className={` md:mx-auto md:mb-[40px] ${
                  isActive ? "text-white" : "text-[#5A698F]"
                }`}
              />
            )}
          </NavLink>
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
