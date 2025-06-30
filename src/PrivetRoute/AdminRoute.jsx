import React from "react";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import { Navigate } from "react-router";

const AdminRoute = ({children}) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useUserRole();

  if (loading || roleLoading) {
    <div className="flex-col gap-4 w-full flex items-center justify-center h-screen">
      <div className="w-20 h-20 border-4 border-transparent text-green-400 text-4xl animate-spin flex items-center justify-center border-t-green-400 rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-sky-400 text-2xl animate-spin flex items-center justify-center border-t-sky-400 rounded-full"></div>
      </div>
    </div>;
  }
  if (!user || role !== "admin") {
    return <Navigate state={location.pathname} to="/forbidden"></Navigate>
  }
  return children
};

export default AdminRoute;
