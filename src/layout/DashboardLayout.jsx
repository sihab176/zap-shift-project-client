import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import ProFastLogo from "../pages/Shared/ProFastLogo/ProFastLogo";

import {
  FaHome,
  FaBoxOpen,
  FaMoneyCheckAlt,
  FaUserEdit,
  FaSearchLocation,
  FaUserClock,
} from "react-icons/fa";
import { RiEBike2Line, RiEBikeFill } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import useUserRole from "../hooks/useUserRole";
import { GrDeliver } from "react-icons/gr";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";

const DashboardLayout = () => {
  const { role, roleLoading } = useUserRole();
  console.log({ role });

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none ">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Navbar Title</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <ProFastLogo></ProFastLogo>
          <li>
            <Link to="/dashboard">
              <FaHome className="inline-block mr-2" />
              Home
            </Link>
          </li>
          <li>
            <NavLink to="/dashboard/myParcel">
              <FaBoxOpen className="inline-block mr-2" />
              My Parcels
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaMoneyCheckAlt className="inline-block mr-2" />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/track">
              <FaSearchLocation className="inline-block mr-2" />
              Track a Package
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile">
              <FaUserEdit className="inline-block mr-2" />
              Update Profile
            </NavLink>
          </li>

          {/* riders deliveries */}

          {!roleLoading && role === "rider" && (
            <>
              <li>
                <NavLink to="/dashboard/pendingDeliveries">
                  <GrDeliver className="inline-block mr-2" />
                  Riders Deliveries
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/completedDeliveries">
                  <IoShieldCheckmarkSharp className="inline-block mr-2" />
                  completed Deliveries
                </NavLink>
              </li>
             <li>
               <NavLink to="/dashboard/myEarning">
                <GiReceiveMoney className="inline-block mr-2" />
                My Earnings
              </NavLink>
             </li>
            </>
          )}

          {/* admin */}
          {!roleLoading && role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/assignRider">
                  <RiEBikeFill className="inline-block mr-2" />
                  Assign Rider
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/active-riders">
                  <RiEBike2Line className="inline-block mr-2" />
                  Active Riders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/pending">
                  <FaUserClock className="inline-block mr-2" />
                  Pending Riders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makeAdmin">
                  <MdAdminPanelSettings className="inline-block mr-2" />
                  make Admin
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
