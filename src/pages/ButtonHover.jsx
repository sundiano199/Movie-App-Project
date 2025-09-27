import React from "react";
import { useState } from "react";
import bookmark from "../assets/icon-bookmark.png";

const ButtonHover = () => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`absolute right-15 top-2 cursor-pointer p-2 rounded-full ${
        hover ? "bg-white" : " bg-gray-600/55"
      } `}
    >
      <img src={bookmark} alt="" className={`${hover ? "invert" : ""}`} />
    </button>
  );
};

export default ButtonHover;
