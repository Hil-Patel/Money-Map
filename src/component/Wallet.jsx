/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../feature/LoginSlice";

const Wallet = () => {
  const dispatch=useDispatch()
  const amount=useSelector((state)=>state.Wallet.balance)
  const changeLogStatus=()=>{
    localStorage.setItem("logStatus","false");
    dispatch(loggedOut());
  }
  return (
    <>
        <div
          className="mr-10 text-xl py-2 font-medium md:space-x-8 px-3 md:p-0 text-blue-900 bg-blue-700 rounded md:bg-transparent md:text-black "
          aria-current="page"
        >
          Wallet : ₹ {amount}
        </div>
        <div className="flex">
          
      <NavLink to={"/history"}>
      <div
          className="mr-10 text-lg py-2 font-medium md:space-x-8 px-3 md:p-0 text-blue-900 bg-blue-700 rounded md:bg-transparent md:text-black "
          aria-current="page"
          >
          Transaction
        </div>
        </NavLink>
        <NavLink to={"/"}>

        <div
          className="mr-10 text-lg py-2 font-medium md:space-x-8 px-3 md:p-0 text-blue-900 bg-blue-700 rounded md:bg-transparent md:text-black "
          aria-current="page"
          onClick={changeLogStatus}
          >
          Log Out
        </div>
            </NavLink>
            </div>
    </>
  );
};

export default Wallet;
