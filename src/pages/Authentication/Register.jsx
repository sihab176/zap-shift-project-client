import React, { use } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router";
import GoogleLogin from "../../SocialLogin/GoogleLogin";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const{user}=useAuth()
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const userInfo = use(AuthContext);
  console.log(userInfo);

  return (
    <div>
      <div className="bg-white">
        <div>
          <h1 className="text-5xl ">Create an Account</h1>
          <p>Register with Profast </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name ----------> */}
          <fieldset className="fieldset">
            <label className="label font-bold">Name</label>

            <input
              type="text"
              className="input"
              placeholder="User Name"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name?.type === "required" && (
              <p className="text-red-600">Please enter your name</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            {/* email ------------> */}
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
            {/* password ---------->*/}
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
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:border-b border-blue"
            >
              Login
            </Link>
          </p>
        </form>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Register;
