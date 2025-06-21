import React from "react";
import AuthLogo from "../assets/authImage.png";
import Login from "../pages/Authentication/Login";
import ProFastLogo from "../pages/Shared/ProFastLogo/ProFastLogo";
import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className="">
      <ProFastLogo />
      <div className="flex items-center  rounded-2xl   ">
        <div className=" space-y-6 flex-1 h-screen lg:pt-44">
          <Outlet />
        </div>
        <div className="flex-1 bg-[#FAFDF0] h-screen lg:pt-44">
          <img src={AuthLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
