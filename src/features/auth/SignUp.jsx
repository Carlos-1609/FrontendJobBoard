import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import signupImage from "../../assets/signup_image.png";
import { FormInput } from "../../components/FormInput";
import {
  first_name_validation,
  last_name_validation,
} from "../../utils/inputvalidation";

const SignUp = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
    alert("Sign up succesful");
  });
  return (
    <div className="bg-[#fff] min-h-screen flex items-center justify-evenly">
      <div>
        <img className="w-[200px]" src={signupImage}></img>
      </div>
      <div className="flex flex-col space-y-4">
        <h1 className="font-poppins font-bold text-[38px]">Sign Up</h1>
        <h2 className="text-[12px] opacity-45">
          Let’s get you all st up so you can access your personal account.
        </h2>
        <FormProvider {...methods}>
          <form
            className="flex flex-col space-y-5"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <div className="flex flex-row space-x-10">
              <FormInput {...first_name_validation} />
              <FormInput {...last_name_validation} />
            </div>
            <button
              type="submit"
              className="bg-blue-400 cursor-pointer"
              onClick={onSubmit}
            >
              Submit
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default SignUp;
