import cn from "classnames";
import { findInputError, isFormInvalid } from "../utils";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { CircleAlert } from "lucide-react";

export const FormInput = ({
  label,
  type,
  id,
  placeholder,
  validation,
  name,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);
  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className="absolute -top-2 left-3 bg-[#FFF] px-1 text-[13px] text-gray-700 font-poppins"
      >
        {label}
      </label>
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <FormInputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
      <div className="flex items-center border border-gray-400 rounded px-4 py-2  ">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
          className="bg-transparent outline-none flex-1 text-gray-700 font-poppins placeholder:text-[11px]"
        />
      </div>
    </div>
  );
};
// Receives a message as a prop and displays it as an error
const FormInputError = ({ message }) => {
  return (
    <motion.p
      className="flex justify-end gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md w-1/2"
      {...framer_error}
    >
      <CircleAlert />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 10 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
