import React from "react";
import useAuth from "./useAuth";
import axios from "axios";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: `http://localhost:3000`,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { user ,logOutUser} = useAuth();
  axiosSecure.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use((res) => {
    return res;
  } ,(error) => {
      // console.log("inside res interceptor ", error.status);
      const status = error.status;
      if (status === 403) {
        navigate("/forbidden");
      }else if( status ===401){
          logOutUser()
          .then(()=>{
            navigate('/login')
          }).catch(error=>{
            console.log(error);
          })
      }
      return Promise.reject(error);
    })
   
  return axiosSecure;
};

export default useAxiosSecure;
