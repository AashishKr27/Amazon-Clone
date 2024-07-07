/* eslint-disable no-unused-vars */
import React from "react";
import darkLogo from "../assets/index";

const SignIn = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <img className="w-32" src={darkLogo} alt="darkLogo" />
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">SignIn</h2>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Email or Mobile Phone number</p>
                    <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput" type="email" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Password</p>
                    <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput" type="password" />
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
