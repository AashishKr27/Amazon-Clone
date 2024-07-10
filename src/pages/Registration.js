/* eslint-disable no-unused-vars */
"use client";
import React, { useState } from "react";
import darkLogo from "../assets/darkLogo.png";
import { ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Registration = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  // Error Message Start
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\S+@\S+\.\S+$/);
  };

  const handleRegisteration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Please enter your name");
    }
    if (!email) {
      setErrEmail("Please enter your email");
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Please enter a valid email");
      }
    }
    if (!password) {
      setErrPassword("Please enter your password");
    } else {
      if (password.length < 6) {
        setErrPassword("Password must be of 6 characters");
      }
    }
    if (!cPassword) {
      setErrCPassword("Confirm your password");
    } else {
      if (password !== cPassword) {
        setErrCPassword("Password does not match");
      }
    }
    if(clientName && email && emailValidation(email) && password && password.length >= 6 && cPassword && cPassword === password){
        console.log(clientName, email, password);
        setClientName("");
        setEmail("");
        setPassword("");
        setCPassword("");
    }
  };
  return (
    <div className="w-full">
      <div className="w-full bg-white pb-10">
        <form className="w-[370px] mx-auto flex flex-col items-center bg-zinc-50">
          <img className="w-32" src={darkLogo} alt="darkLogo" />
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your Name</p>
                <input
                  onChange={handleName}
                  value={clientName}
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                  type="text"
                />
                {errClientName && (
                  <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold">
                      !
                    </span>
                    {errClientName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or Phone number</p>
                <input
                  onChange={handleEmail}
                  value={email}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                  type="email"
                />
                {errEmail && (
                  <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold">
                      !
                    </span>
                    {errEmail}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  onChange={handlePassword}
                  value={password}
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                  type="password"
                />
                {errPassword && (
                  <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold">
                      !
                    </span>
                    {errPassword}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-Enter Password</p>
                <input
                  onChange={handleCPassword}
                  value={cPassword}
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                  type="password"
                />
                {errCPassword && (
                  <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold">
                      !
                    </span>
                    {errCPassword}
                  </p>
                )}
                <p className="text-xs text-gray-600">
                  Password must be of 6 characters
                </p>
              </div>
              <button
                onClick={handleRegisteration}
                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              >
                Continue
              </button>
            </div>
            <p className="text-sm text-black leading-4 mt-4">
              By continuing, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use </span> and
              <span className="text-blue-600"> Privacy Notice</span>
            </p>
            <div>
              <p className="text-sm text-black leading-4 mt-4">
                Already have an account?{" "}
                <Link className="w-full" to="/signin">
                  <span className="text-blue-600 text-sm hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                    Sign in
                    <span className="text-blue-600">
                      <ArrowRight />
                    </span>
                  </span>
                </Link>
              </p>
              <p className="text-sm text-black -mt-2">
                Buying for work?{" "}
                <span className="text-blue-600 text-xs hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                  Create a free business account
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 items-center justify-center py-10">
        <div className="flex items-center gap-6">
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Conditions of Use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
        </div>
        <p className="text-xs text-gray-600">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Registration;
