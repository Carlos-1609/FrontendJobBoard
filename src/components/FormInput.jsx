import cn from "classnames";
import { findInputError, isFormInvalid } from "../utils";
import { useForm, useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { CircleAlert, Eye } from "lucide-react";
import { useState } from "react";
export const FormInput = (props) => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();
  const {
    label,
    onChange,
    Icon,
    errorMessage,
    name,
    placeholder,
    type,
    validation,
  } = props;
  return (
    <div className="relative w-full">
      {/* Floating Label */}
      <label
        htmlFor={name}
        className="absolute -top-2 left-3 bg-white px-1 text-[13px] text-gray-700 font-poppins"
      >
        {label}
      </label>

      {/* Wrap input + error together so they share a parent */}
      <div className="flex flex-col">
        <div className="flex items-center border border-gray-400 rounded px-4 py-2">
          {Icon && <Icon className="w-5 h-5 text-black mr-2 font-poppins" />}

          <input
            {...register(name, validation)}
            id={name}
            placeholder={placeholder}
            type={type}
            className="peer bg-transparent outline-none flex-1 text-gray-700 font-poppins"
            onChange={onChange}
          />
        </div>

        {errors[name] && (
          <span className="mt-1 text-red-500 text-[13px] ">
            {errors[name].message}
          </span>
        )}
      </div>
    </div>
  );
};

// {
//   id: 1,
//   name: "name",
//   type: "text",
//   placeholder: "Enter Full Name",
//   errorMessage:
//     "Name should not be empty and not include any numbers or special characters!",
//   label: "Full Name",
//   required: true,
//   pattern: "^[A-Za-z]+(?: [A-Za-z]+)*$",
// },

// export const FormInput = ({
//   label,
//   type,
//   id,
//   placeholder,
//   validation,
//   name,
//   Icon,
// }) => {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext();
//   const inputError = findInputError(errors, label);
//   const isInvalid = isFormInvalid(inputError);
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePassword = () => setShowPassword((prev) => !prev);

//   return (
//     <div className="relative w-full">
//       <label
//         htmlFor={id}
//         className="absolute -top-2 left-3 bg-[#FFF] px-1 text-[13px] text-gray-700 font-poppins"
//       >
//         {label}
//       </label>
//       <AnimatePresence mode="wait" initial={false}>
//         {isInvalid && (
//           <FormInputError
//             message={inputError.error.message}
//             key={inputError.error.message}
//           />
//         )}
//       </AnimatePresence>
//       <div className="flex items-center border border-gray-400 rounded px-4 py-2  ">
//         {id === "userPassword" ? (
//           <>
//             <input
//               id={id}
//               type={showPassword ? "text" : "password"}
//               placeholder={placeholder}
//               {...register(name, validation)}
//               className="bg-transparent outline-none flex-1 text-gray-700 font-poppins placeholder:text-[11px] text-[16px]"
//             />
//             {Icon &&
//               (!showPassword ? (
//                 <Icon
//                   onClick={togglePassword}
//                   className="w-5 h-5 text-black mr-2 font-poppins "
//                 />
//               ) : (
//                 <Eye
//                   onClick={togglePassword}
//                   className="w-5 h-5 text-black mr-2 font-poppins "
//                 />
//               ))}
//           </>
//         ) : (
//           <>
//             <input
//               id={id}
//               type={type}
//               placeholder={placeholder}
//               {...register(name, validation)}
//               className="bg-transparent outline-none flex-1 text-gray-700 font-poppins placeholder:text-[11px] text-[16px]"
//             />
//             {Icon && <Icon className="w-5 h-5 text-black mr-2 font-poppins" />}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };
// // Receives a message as a prop and displays it as an error
// const FormInputError = ({ message }) => {
//   console.log(message);
//   return (
//     <motion.p
//       className="flex justify-end gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md w-1/2"
//       {...framer_error}
//     >
//       <CircleAlert />
//       {message}
//     </motion.p>
//   );
// };

// const framer_error = {
//   initial: { opacity: 0, y: 10 },
//   animate: { opacity: 1, y: 10 },
//   exit: { opacity: 0, y: 10 },
//   transition: { duration: 0.2 },
// };

// export const FormInput = (props) => {
//   const { label, onChange, id, Icon, errorMessage, ...inputProps } = props;
//   return (
//     <div className="relative w-full">
//       {/* Floating Label */}
//       <label
//         htmlFor={id}
//         className="absolute -top-2 left-3 bg-white px-1 text-[13px] text-gray-700 font-poppins"
//       >
//         {label}
//       </label>

//       {/* Wrap input + error together so they share a parent */}
//       <div className="flex flex-col">
//         <div className="flex items-center border border-gray-400 rounded px-4 py-2">
//           {Icon && <Icon className="w-5 h-5 text-black mr-2 font-poppins" />}

//           <input
//             id={id}
//             {...inputProps}
//             className="peer bg-transparent outline-none flex-1 text-gray-700 font-poppins"
//             onChange={onChange}
//           />
//         </div>

//         {/* hidden by default, show when the peer (input) is invalid */}
//         <span className="mt-1 text-red-500 text-[13px] ">{errorMessage}</span>
//       </div>
//     </div>
//   );
// };
