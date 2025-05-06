import { useNavigate } from "react-router";
import newPassword from "../../assets/new_password.jpg";
import { Lock } from "lucide-react";

const NewPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-evenly bg-[#fff] ">
      <div className="flex flex-col space-y-6 ml-10">
        <h1 className="font-bold text-4xl font-poppins">Set a Password</h1>
        <h2 className="text-[12px] opacity-45">
          Your previous password has been reseted. Please set a new password for
          your account.
        </h2>
        <div className="flex flex-col space-y-6">
          <div className="relative w-full">
            <label
              htmlFor="verifyCode"
              className="absolute -top-2 left-3 bg-[#FFF] px-1 text-[13px] text-gray-700 font-poppins"
            >
              Create Password
            </label>
            <div className="flex items-center border border-gray-400 rounded px-4 py-2  ">
              <input
                id="verifyCode"
                type="text"
                placeholder="Enter the new Password"
                className="bg-transparent outline-none flex-1 text-gray-700 font-poppins placeholder:text-[11px] text-[16px]"
              />
              <Lock />
            </div>
          </div>
          <div className="relative w-full">
            <label
              htmlFor="verifyCode"
              className="absolute -top-2 left-3 bg-[#FFF] px-1 text-[13px] text-gray-700 font-poppins"
            >
              Re-Enter Password
            </label>
            <div className="flex items-center border border-gray-400 rounded px-4 py-2  ">
              <input
                id="verifyCode"
                type="text"
                placeholder="Re-Enter the new Password"
                className="bg-transparent outline-none flex-1 text-gray-700 font-poppins placeholder:text-[11px] text-[16px]"
              />
              <Lock />
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <button
            type="submit"
            className=" w-full  bg-[#3869EB] hover:bg-blue-700 text-white font-semibold text-lg rounded-lg py-3 px-8 transition-colors cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Set Password
          </button>
        </div>
      </div>
      <div className="">
        <div className="">
          <img
            className="w-[800px]"
            src={newPassword}
            alt="Dev illustration "
          />
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
