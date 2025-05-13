import verifyCodeImage from "../../assets/verify_code.jpg";
import { Lock, ChevronLeft } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import UserInput from "../../components/UserInput";
import { useState } from "react";
const VerifyCode = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); //is the users email
  const [code, setCode] = useState();

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onVerifyCode = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(
        "http://localhost:8000/users/password-code-verification",
        {
          method: "Post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: state, verificationCode: code }),
          credentials: "include", // accepts cookies
        }
      );
      if (!res.ok) {
        throw new Error("Code verification failed");
      }
      const data = await res.json();
      console.log("✅ Code Verification Success:", data);
      navigate("/newPassword", { state: state });
    } catch (error) {
      console.error("Code Verification Error: ", error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-evenly bg-[#fff] ">
      <div className="flex flex-col space-y-6 ml-5">
        <Link to="/">
          <div className="flex flex-row space-x-1">
            <ChevronLeft className="w-[18px] h-[18px] text-gray-500" />
            <span className="text-[12px] text-poppins font-bold">
              Back to Login
            </span>
          </div>
        </Link>
        <h1 className="font-bold text-4xl font-poppins">Verify Code</h1>
        <h2 className="text-[12px] opacity-45">
          An authentication code has been sent to your email.
        </h2>
        <div className="relative w-full">
          <label
            htmlFor="verifyCode"
            className="absolute -top-2 left-3 bg-[#FFF] px-1 text-[13px] text-gray-700 font-poppins"
          >
            Enter Code
          </label>
          <div className="flex items-center border border-gray-400 rounded px-4 py-2  ">
            <input
              id="verifyCode"
              type="text"
              placeholder="Enter the 6 digit code"
              className="bg-transparent outline-none flex-1 text-gray-700 font-poppins placeholder:text-[11px] text-[16px]"
              onChange={(e) => {
                onChangeCode(e);
              }}
            />
          </div>
        </div>
        <div className="flex font-bold text-[12px] font-poppins text-black">
          Didn't received a code?&nbsp;
          <span className="text-red-500 font-poppins  text-[12px] cursor-pointer">
            Resend
          </span>
        </div>
        <div className="flex justify-center ">
          <button
            type="submit"
            className=" w-full  bg-[#3869EB] hover:bg-blue-700 text-white font-semibold text-lg rounded-lg py-3 px-8 transition-colors cursor-pointer"
            onClick={(e) => onVerifyCode(e)}
          >
            Verify
          </button>
        </div>
      </div>
      <div className="">
        <div className="">
          <img
            className="w-[800px]"
            src={verifyCodeImage}
            alt="Dev illustration "
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
