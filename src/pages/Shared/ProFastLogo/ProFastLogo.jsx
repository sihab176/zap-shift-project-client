import React from "react";
import Logo from "../../../assets/logo.png";

const ProFastLogo = () => {
  return (
    <div className="flex items-end">
      <img className="mb-2" src={Logo} alt="" />
      <h1 className="text-3xl font-semibold -ml-4">ProFast</h1>
    </div>
  );
};

export default ProFastLogo;
