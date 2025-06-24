import React, { use } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import GoogleLogin from "../../SocialLogin/GoogleLogin";

import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { user } = use(AuthContext);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white">
      <div>
        <h1 className="text-5xl ">Welcome Back</h1>
        <p>Login with Profast </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label font-bold">Email</label>
          <input
            type="email"
            className="input"
            {...register("email", {
              required: true,
            })}
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">please inter your email</p>
          )}
          <label className="label font-bold">Password</label>
          <input
            type="password"
            className="input"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">please inter your password</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">The password must be 6 characters</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn bg-[#CAEB66] w-80 mt-4">Login</button>
        </fieldset>
        <p>
          Don’t have any account?{" "}
          <Link
            className="text-blue-600 hover:border-b hover:border-blue-600"
            to="/register"
          >
            Register
          </Link>
        </p>
      </form>
      <GoogleLogin />
    </div>
  );
};

export default Login;
