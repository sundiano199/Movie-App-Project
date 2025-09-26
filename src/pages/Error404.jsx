import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center leading-loose h-screen">
      <h1 className="text-6xl">OOOps!!</h1>
      <h2 className="text-md">404-Page Not Found</h2>
      <Link to="/dashboard">
        <button className="bg-white text-black rounded-lg p-2 text-xs cursor-pointer">
          GOTO HOMEPAGE
        </button>
      </Link>
    </div>
  );
}

export default Error404