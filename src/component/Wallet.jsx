/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const Wallet = () => {
  return (
    <>
      <NavLink to={"/history"}>
        <div
          className="mr-10 text-xl py-2 font-medium md:space-x-8 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          aria-current="page"
        >
          Wallet : ₹
        </div>
      </NavLink>
    </>
  );
};

export default Wallet;
