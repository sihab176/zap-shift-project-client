import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const googleProvider=new GoogleAuthProvider()
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

// create user
  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  // signin user
  const singInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  // googleLogin
const googleLogin =()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}
  
  // logOut 
  const logOutUser=()=>{
    setLoading(true)
    return signOut(auth)
  }

//   update user 
const updateUser=(updateData)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,updateData)
}
  
  // onAuth change
  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
  },[])
  const userInfo = {
    
    createUser,
    singInUser,
    logOutUser,
    updateUser,
    googleLogin,
    user,
    loading,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
