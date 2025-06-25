import React from "react";
import ProFastLogo from "../ProFastLogo/ProFastLogo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  console.log(user);

  const handleLogout = () => {
    logOutUser();
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard/myParcel">Dashboard</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/rider">Be a Rider</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <ProFastLogo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" gap-10 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-6">
        {user ? (
          <button onClick={handleLogout} className="btn">
            log out
          </button>
        ) : (
          <Link to="/login" className="btn">
            sign In
          </Link>
        )}
        <a className="btn">Be a ride</a>
        <a className="bg-black w-9 h-9 text-center text-white flex justify-center rounded-full">
          X
        </a>
      </div>
    </div>
  );
};

export default Navbar;
