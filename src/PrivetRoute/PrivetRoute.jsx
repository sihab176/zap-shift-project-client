import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const PrivetRoute = ({ children }) => {
  const { loading, user } = useAuth();
  if (loading) {
    return (
      <div className="flex-col gap-4 w-full flex items-center justify-center h-screen">
        <div className="w-20 h-20 border-4 border-transparent text-green-400 text-4xl animate-spin flex items-center justify-center border-t-green-400 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-sky-400 text-2xl animate-spin flex items-center justify-center border-t-sky-400 rounded-full"></div>
        </div>
      </div>
      
    );
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivetRoute;
