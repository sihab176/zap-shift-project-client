import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import GoogleLogin from "../../SocialLogin/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
import useAxios from "../../hooks/useAxios";

const Register = () => {
  const { createUser, updateUser } = useAuth();
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate("/");
  const axiosInstance = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ! HANDLE SUBMIT ---------------------------------------------->
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(async (result) => {
        console.log(result);
        
        // save into database ------------->
        const userInfo = {
          email: data.email,
          role: "user",
          created_at: new Date().toISOString(),
          last_login: new Date().toISOString(),
        };

        const userRes = await axiosInstance.post("/users", userInfo);
        console.log("userRes", userRes.data);

        const userProfile = {
          displayName: data.name,
          photoURL: profilePic,
        };
        // ! update user ---------->
        updateUser(userProfile)
          .then(() => {
            navigate("/");
            Swal.fire({
              icon: "success",
              title: "welcome to BookBridge ",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  // ! HANDLE IMAGE UPLOAD TO IMAGBB --------------------------------->
  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );
    setProfilePic(res.data.data.url);
  };
  // console.log(profilePic);
  return (
    <div>
      <div className="bg-white">
        <div>
          <h1 className="text-5xl ">Create an Account</h1>
          <p>Register with Profast </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* photo ----------> */}
          <fieldset className="fieldset">
            <label htmlFor="image" className="label font-bold">
              Select Image:
            </label>
            <input
              onChange={handleImageUpload}
              className=" cursor-pointer input pt-2"
              type="file"
              id="image"
              name="image"
              accept="image/*"
            />
          </fieldset>
          {/* name  */}
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
            <button className="btn bg-[#CAEB66] w-80 mt-4">register</button>
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
