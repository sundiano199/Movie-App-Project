import React from 'react'
import bookmark from "../assets/icon-bookmark.png";
import { useState } from 'react';

const ButtonHover2 = () => {
  const [hover, setHover] = useState(false);
    return (
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`absolute right-3 top-2 cursor-pointer p-2 rounded-full ${
          hover ? "bg-white" : " bg-gray-600/55"
        } `}
      >
        <img src={bookmark} alt="" className={`${hover ? "invert" : ""}`} />
      </button>
    );
  };


export default ButtonHover2