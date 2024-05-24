/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const NavOption = () => {
    const showOption=()=>{
        document.getElementById("navbar-solid-bg").classList.toggle("hidden");
        document.getElementById("navbar-solid-bg").classList.toggle("block");
    }
  return (
    <>
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        onClick={showOption}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto mr-10" id="navbar-solid-bg">
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
          <li>
            <NavLink to={"/"}>
              <div
                className="block py-2 px-3 md:p-0 text-black bg-blue-200 rounded md:bg-transparent md:text-black "
                aria-current="page"
              >
                Login
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/SignUp"}>
              <div
                className="block py-2 px-3 md:p-0 text-black bg-blue-200 rounded md:bg-transparent md:text-black "
                aria-current="page"
              >
                SignUp
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavOption;
