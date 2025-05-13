import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Mail, ChevronLeft } from "lucide-react";
import recoverImage from "../../assets/recover_image.jpg";
import UserInput from "../../components/UserInput";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();

  const onEmailVerification = async (e) => {
    try {
      e.preventDefault();
      console.log(email);
      const res = await fetch("http://localhost:8000/users/forgot-password", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        credentials: "include", // accepts cookies
      });
      if (!res.ok) {
        throw new Error("Email verification failed");
      }
      const data = await res.json();
      console.log("✅ Email Verification Success:", data);
      navigate("/verifycode", { state: email });
    } catch (error) {
      console.error("Email Verification Error: ", error.message);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-evenly bg-[#fff] ">
      <div className="flex flex-col space-y-8">
        <Link to="/">
          <div className="flex flex-row space-x-1">
            <ChevronLeft className="w-[18px] h-[18px] text-gray-500" />
            <span className="text-[12px] text-poppins font-bold">
              Back to Login
            </span>
          </div>
        </Link>
        <h1 className="font-bold text-4xl font-poppins">
          Forgot your password?
        </h1>
        <h2 className="text-[12px] opacity-45">
          Don’t worry, happens to all of us. Enter your email below to recover
          your password
        </h2>
        <UserInput
          name="userEmail"
          id="email"
          placeholder="email@gmail.com"
          lblName="Email"
          Icon={Mail}
          onChange={onChangeEmail}
        />
        <div className="flex justify-center ">
          <button
            type="submit"
            className=" w-full  bg-[#3869EB] hover:bg-blue-700 text-white font-semibold text-lg rounded-lg py-3 px-8 transition-colors cursor-pointer"
            onClick={(e) => {
              onEmailVerification(e);
            }}
          >
            Submit
          </button>
        </div>
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
          <img
            className="w-[800px]"
            src={recoverImage}
            alt="Dev illustration "
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
