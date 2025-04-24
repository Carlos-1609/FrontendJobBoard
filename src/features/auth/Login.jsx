import React from "react";
import { Link, useNavigate } from "react-router";
import UserInput from "../../components/UserInput";
import { Mail, EyeOff, Lock } from "lucide-react";
import { FaApple, FaGoogle, FaFacebookF } from "react-icons/fa";
import loginImage from "../../assets/login_image.png";
import useCheckAuth from "../../hooks/CheckAuth";

const Login = () => {
  const navigate = useNavigate();

  let userInfo;
  let email = "carlosord1609@gmail.com";
  let password = "123456";

  const onLogin = async () => {
    try {
      const res = await fetch("http://localhost:8000/users/login", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // accepts cookies
      });
      if (!res.ok) {
        throw new Error("Login failed");
      }
      //useCheckAuth(); //checks the access code is valid
      const data = await res.json();
      console.log("✅ Login success:", data);
      navigate("/jobs");
    } catch (error) {
      console.error("Login Error: ", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-evenly bg-[#fff] ">
      <div className="flex flex-col space-y-8">
        <h1 className="font-bold text-5xl font-poppins">Welcome Back !!</h1>
        <UserInput
          name="userEmail"
          id="email"
          placeholder="email@gmail.com"
          lblName="Email"
          Icon={Mail}
        />
        <UserInput
          name="userPass"
          id="password"
          placeholder="*********"
          lblName="Password"
          Icon={Lock}
        />
        <div className="flex justify-end font-bold cursor-pointer text-sm font-poppins text-red-400">
          Forgot Password?
        </div>
        <div className="flex justify-center ">
          <button
            type="submit"
            className=" w-full  bg-[#3869EB] hover:bg-blue-700 text-white font-semibold text-lg rounded-lg py-3 px-8 transition-colors cursor-pointer"
            onClick={onLogin}
          >
            Login
          </button>
        </div>
        <Link to="/signup">
          <div className="flex justify-center font-bold cursor-pointer text-sm font-poppins text-black">
            Dont have an account? Sign up
          </div>
        </Link>
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-400 text-[13px] font-poppins">
            Or login with
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-6">
          <button className="border border-[#3869EB] p-3 px-20 rounded cursor-pointer">
            <FaFacebookF className="text-[#1877F2] w-6 h-6" />
          </button>
          <button className="border border-[#3869EB] p-3 px-20 rounded cursor-pointer">
            <FaGoogle className="text-[#4b99ff] w-6 h-6" />
          </button>
          <button className="border border-[#3869EB] p-4 px-20 rounded cursor-pointer">
            <FaApple className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
      <div className="">
        <div className="">
          <img className="w-[400px]" src={loginImage} alt="Dev illustration " />
        </div>
      </div>
    </div>
  );
};

export default Login;
