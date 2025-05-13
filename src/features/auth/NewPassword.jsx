import { useLocation, useNavigate } from "react-router";
import newPasswordImg from "../../assets/new_password.jpg";
import { Lock } from "lucide-react";
import { useState } from "react";

const NewPassword = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [password, setPassword] = useState();
  const [matchedPassword, setMatchedPassword] = useState();
  const [passVal, setPassVal] = useState(true);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeMatchedPassword = (e) => {
    setMatchedPassword(e.target.value);
  };

  const onSubmitNewPassword = async (e) => {
    try {
      e.preventDefault();
      checkPasswords();
      if (!passVal) {
        throw new Error("Passwords dont match");
      }

      // const res = await fetch("http://localhost:8000/users/update-password", {
      //   method: "Post",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email: state, newPassword: password }),
      //   credentials: "include", // accepts cookies
      // });
      // if (!res.ok) {
      //   throw new Error("Password update failed");
      // }
      // const data = await res.json();
      // console.log("✅ Password updated:", data);
      // navigate("/");
    } catch (error) {
      console.error("Password Updating Error: ", error.message);
    }
  };

  const checkPasswords = () => {
    //console.log(password, matchedPassword);
    if (password !== matchedPassword || matchedPassword !== password) {
      setPassVal(false);
    } else {
      setPassVal(true);
    }
  };

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
              htmlFor="userPass1"
              className="absolute -top-2 left-3 bg-[#FFF] px-1 text-[13px] text-gray-700 font-poppins"
            >
              Create Password
            </label>
            <div
              className={`flex items-center border border-gray-400 rounded px-4 py-2 ${
                !passVal ? "border-red-500" : ""
              }`}
            >
              <input
                id="userPass1"
                type="text"
                placeholder="Enter the new Password"
                className="bg-transparent outline-none flex-1 text-gray-700 font-poppins placeholder:text-[11px] text-[16px]"
                onChange={(e) => {
                  onChangePassword(e);
                }}
              />
              <Lock />
            </div>
          </div>
          <div className="relative w-full">
            <label
              htmlFor="userPass2"
              className="absolute -top-2 left-3 bg-[#FFF] px-1 text-[13px] text-gray-700 font-poppins"
            >
              Re-Enter Password
            </label>
            <div
              className={`flex items-center border border-gray-400 rounded px-4 py-2 ${
                !passVal ? "border-red-500" : ""
              }`}
            >
              <input
                id="userPass2"
                type="text"
                placeholder="Re-Enter the new Password"
                className="bg-transparent outline-none flex-1 text-gray-700 font-poppins placeholder:text-[11px] text-[16px]"
                onChange={(e) => onChangeMatchedPassword(e)}
              />
              <Lock />
            </div>
          </div>
          {!passVal ? (
            <span className="text-red-500 font-poppins text-[12px]">
              Passwords don't match
            </span>
          ) : (
            <></>
          )}
        </div>

        <div className="flex justify-center ">
          <button
            type="submit"
            className=" w-full  bg-[#3869EB] hover:bg-blue-700 text-white font-semibold text-lg rounded-lg py-3 px-8 transition-colors cursor-pointer"
            onClick={(e) => {
              onSubmitNewPassword(e);
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
            src={newPasswordImg}
            alt="Dev illustration "
          />
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
