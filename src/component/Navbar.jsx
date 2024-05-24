/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import NavOption from "./NavOption";
import { useSelector } from "react-redux";
import Wallet from "./Wallet";
import logo from "../assets/img/logo.jpg"

const Navbar = () => {
    const loggedStatus=useSelector((state)=>state.log.status)
  return (
    <>
      <nav className=" border-gray-200 bg-blue-200 ">
        <div className=" ml-10 flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-8"
              alt="money map Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Money Map
            </span>
          </a>
          { loggedStatus ? <Wallet/> :<NavOption/>}
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
