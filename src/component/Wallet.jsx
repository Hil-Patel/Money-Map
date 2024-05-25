/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Wallet = () => {
  const amount=useSelector((state)=>state.Wallet.balance)
  return (
    <>
        <div
          className="mr-10 text-xl py-2 font-medium md:space-x-8 px-3 md:p-0 text-blue-900 bg-blue-700 rounded md:bg-transparent md:text-black "
          aria-current="page"
        >
          Wallet : ₹ {amount}
        </div>
      <NavLink to={"/history"}>
      <div
          className="mr-10 text-lg py-2 font-medium md:space-x-8 px-3 md:p-0 text-blue-900 bg-blue-700 rounded md:bg-transparent md:text-black "
          aria-current="page"
          >
          Transaction
        </div>
          </NavLink>
    </>
  );
};

export default Wallet;
