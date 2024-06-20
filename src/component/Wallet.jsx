/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../feature/LoginSlice";
import { UserloggedOut } from "../feature/UserSlice";
import { setTransaction } from "../feature/TransactionSlice";
import { setAmount } from "../feature/WalletSlice";

const Wallet = () => {
  const dispatch=useDispatch()
  const amount=useSelector((state)=>state.Wallet.balance)
  const changeLogStatus=()=>{
    localStorage.setItem("logStatus",JSON.stringify({logStatus:false,username:""}));
    dispatch( loggedOut() );
    dispatch( UserloggedOut() )
    dispatch(setAmount(0))
    dispatch(setTransaction({
      transactions:[],
      income:[],
      expense:[]
  }))
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
          
      <div
          className="mr-10 text-lg py-2 font-medium md:space-x-8 px-3 md:p-0 text-blue-900 bg-blue-700 rounded md:bg-transparent md:text-black "
          aria-current="page"
        >
          <NavLink to={"/home"}>
            Home
          </NavLink>
      <NavLink to={"/history"}>
          Transaction
        </NavLink>
        </div>
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
