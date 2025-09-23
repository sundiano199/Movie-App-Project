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
const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="grid  my-[32px] ml-[32px] mr-[36px] bg-[#161D2F] rounded-[20px]">
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="block mx-auto pt-[35px] px-[32px] pb-[75px]"
            />{" "}
          </Link>
        </div>
        <div>
          <img src={menu} alt="" className="px-[38px] pb-[40px]" />
          <img src={movies} alt="" className="px-[38px] pb-[40px]" />
          <img src={tv} alt="" className="px-[38px] pb-[40px]" />
          <img src={bookmark} alt="" className="px-[38px] pb-[552px]" />
        </div>
        <div>
          <img src={profile} alt="" className="px-[28px] pb-[32px]" />
        </div>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <input type="text" placeholder="Search for movies or TV series" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
