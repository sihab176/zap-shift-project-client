import React, { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const userInfo = {
    email: " rak@gmail.com",
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
