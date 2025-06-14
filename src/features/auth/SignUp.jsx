import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import signupImage from "../../assets/signup_vector.jpg";
import { FormInput } from "../../components/FormInput";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const {
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = methods;
  const [success, setSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const onSubmit = async (data) => {
    try {
      setError("root", {
        message: "",
      });
      let newUser = {
        name: data["fullName"],
        email: data["email"],
        password: data["password"],
        role:
          selectedOption === "" ? "job seeker" : selectedOption.toLowerCase(),
        resume: "",
      };
      //console.log("this is the new user", newUser);
      const res = await fetch("http://localhost:8000/users/signup", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newUser }),
        credentials: "include", // accepts cookies
      });

      if (!res.ok) {
        throw new Error("Code verification failed");
      }
      navigate("/jobs");
    } catch (error) {
      console.log(error);
      setError("root", {
        message:
          "There was ane error when creating the account, please try again",
      });
    }
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  return (
    <div className="bg-[#fff] min-h-screen flex items-center justify-evenly lg:flex-row flex-col">
      <div>
        <img className="w-[800px]" src={signupImage}></img>
      </div>
      <div className="flex flex-col space-y-4 mr-5">
        <h1 className="font-poppins font-bold text-[38px]">Sign Up</h1>
        <h2 className="text-[12px] opacity-45">
          Let’s get you all set up so you can access your personal account.
        </h2>
        <FormProvider {...methods}>
          <form
            className="flex flex-col space-y-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormInput
              name="fullName"
              placeholder="Please Enter Full Name"
              type="text"
              label="Full Name"
              validation={{
                required: "Full Name is required",
                pattern: {
                  value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                  message: "Pleaase enter a valid Name",
                },
              }}
            />
            <FormInput
              name="email"
              placeholder="Please Enter an email"
              type="email"
              label="Email"
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  messsage: "Please enter a valid email address",
                },
              }}
            />
            <FormInput
              name="password"
              placeholder="Please Enter your password"
              type="text"
              label="Password"
              validation={{
                required: "Please enter a passsword",
                pattern: {
                  value:
                    /^(?=.{8,20}$)(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])(?!.*\s).*$/,
                  message:
                    "Password must be 8-20 chars, 1 uppercase, 1 number, 1 special char",
                },
              }}
            />
            <FormInput
              name="confirmPassword"
              placeholder="Please Confirm your password"
              type="text"
              label="Confirm Password"
              validation={{
                required: "Please confirm your password",
                validate: (value) =>
                  value === methods.getValues("password") ||
                  "Passwords do not match",
              }}
            />
            <div className="flex flex-row space-x-10">
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex justify-between items-center gap-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none"
                >
                  {selectedOption || "User Type"}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <button
                        type="button"
                        onClick={() => handleSelect("Job Seeker")}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Job Seeker
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelect("Recruiter")}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Recruiter
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full  bg-[#3869EB] hover:bg-blue-700 text-white font-semibold text-lg rounded-lg py-3 px-8 transition-colors cursor-pointer "
            >
              {isSubmitting ? "Loading..." : "Create Account"}
            </button>
            {errors.root && (
              <span className="mt-1 text-red-500 text-[13px] ">
                {errors.root.message}
              </span>
            )}
            <div className="flex justify-center font-bold  text-sm font-poppins text-black">
              Already have an account?&nbsp;
              <Link to="/">
                <span className="text-red-500 font-poppins cursor-pointer">
                  Login
                </span>
              </Link>
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
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default SignUp;
