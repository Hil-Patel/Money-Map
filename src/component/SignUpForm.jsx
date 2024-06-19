/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import loginImage from "../assets/img/login.jpg";
import { useFormik } from "formik";
import { SignUpSchema } from "../schema/Signup";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as CryptoJS from "crypto-js";

const SignUpForm = () => {
  const isLogin = useSelector((state) => state.log.status);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      const hashedpassword=CryptoJS.AES.encrypt(values.password,"secret!3#%@").toString()
      values.password=hashedpassword;
      values.confirmPassword=hashedpassword;
      localStorage.setItem(values.username,JSON.stringify(values))
      navigate("/");
    },
  });
  useEffect(() => {
    if (isLogin) {
      navigate("/home");
    }
  });
  return (
    <>
      <div className="login-form bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-lg m-0  sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="log-detail lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className=" flex flex-col items-center gap-5 w-full">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>
              <div className="w-full flex-1 mt-8">
                <form className="mx-auto " onSubmit={formik.handleSubmit}>

                  <input
                    name="username"
                    type="text"
                    value={formik.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Username"
                    className=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <span className="text-red-500 mb-3 ml-2">
                      {formik.errors.username}
                    </span>
                  ) : 
                  null}

                  <input
                    name="email"
                    type="email"
                    value={formik.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Email"
                    className=" w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span className="text-red-500 ml-2">
                      {formik.errors.email}
                    </span>
                  ) :null}

                  <input
                    name="password"
                    type="password"
                    value={formik.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Password"
                    className=" w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <span className="text-red-500  mb-5 ml-2">
                      {formik.errors.password}
                    </span>
                  ) : null}

                  <input
                    name="confirmPassword"
                    type="password"
                    value={formik.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Confirm Password"
                    className=" w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <span className="text-red-500 mb-5 ml-2">
                      {formik.errors.confirmPassword}
                    </span>
                  ) :null}

                  <button
                    type="submit"
                    className="mt-5 mb-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>

                  <div>
                    Already have Account?
                    <NavLink to={"/"} className="text-blue-600 ml-2">
                      Log In
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <img src={loginImage} className="log-img w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
