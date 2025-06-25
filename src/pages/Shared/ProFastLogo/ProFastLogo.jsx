import React from "react";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router";

const ProFastLogo = () => {
  return (
    <Link to="/">
      <div className="flex items-end">
        <img className="mb-2" src={Logo} alt="" />
        <h1 className="text-3xl font-semibold -ml-4">ProFast</h1>
      </div>
    </Link>
  );
};

export default ProFastLogo;
