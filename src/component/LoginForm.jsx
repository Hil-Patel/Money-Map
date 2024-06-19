/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import loginImage from '../assets/img/login.jpg'
import { useFormik } from "formik";
import { LoginSchema } from "../schema/Login";
import { NavLink ,useNavigate} from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { loggedIn ,loggedOut} from "../feature/LoginSlice";
import {UserloggedIn} from "../feature/UserSlice"
import { setTransaction } from "../feature/TransactionSlice";
import { setAmount } from "../feature/WalletSlice";
import CryptoJS from "crypto-js";


const LoginForm = () => {
    const isLogin = useSelector((state) => state.log.status);
    const navigate = useNavigate();
    const dispatch=useDispatch();

    const formik = useFormik({
        initialValues: {
          username: "",
          password: "",
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            const storedpassword=CryptoJS.AES.decrypt(JSON.parse(localStorage.getItem(values.username)).password,"secret!3#%@").toString(CryptoJS.enc.Utf8);
            if(storedpassword===values.password){
                dispatch(UserloggedIn(values.username));
                if(localStorage.getItem(`${values.username}Transaction`)){
                  dispatch(setTransaction(JSON.parse(localStorage.getItem(`${values.username}Transaction`))));
                  dispatch(setAmount(JSON.parse(localStorage.getItem(`${values.username}Wallet`))))
                }
                else{
                  localStorage.setItem(`${values.username}Transaction`,JSON.stringify({transactions:[],income:[],expense:[]}))
                  localStorage.setItem(`${values.username}Wallet`,JSON.stringify(0));
                }
                localStorage.setItem("logStatus",JSON.stringify({logStatus:true,username:values.username}))
                dispatch(loggedIn());
                navigate("/home")
            }
            else{
                alert("Invalid Credentials")
            }
        },
      });
      useEffect(()=>{
        console.log(isLogin);
        if(isLogin){
            navigate("/home")
        }
        if(!localStorage.getItem("logStatus")){
          localStorage.setItem("logStatus","false")
        }
      })
  return (
    <>
      <div className="login-form bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-lg m-0  sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="log-detail lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className=" flex flex-col items-center gap-5 w-full">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Log In</h1>
              <div className="w-full flex-1 mt-8">

                    <form className="mx-auto " onSubmit={formik.handleSubmit}>
                    
                  <input
                    name="username"
                    type="text"
                    value={formik.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Username"
                    className=" w-full mb-2 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  {formik.touched.username && formik.errors.username ? (
            <span className="text-red-500 mb-2 ml-2">{formik.errors.username}</span>
          ) : null}


                  <input
                    name="password"
                    type="password"
                    value={formik.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Password"
                    className=" w-full mb-2 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  />
                  {formik.touched.password && formik.errors.password ? (
            <span className="text-red-500  mb-5 ml-2">{formik.errors.password}</span>
          ) : null}
                  <button type="submit" className="mt-5 mb-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    
                    <span className="ml-3">Log In</span>
                  </button>

                  <div>Don't have Account?<NavLink to={"/SignUp"} className="text-blue-600 ml-2">Sign Up</NavLink></div>
                        </form>
                
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <img
              src={loginImage}
              className="log-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
