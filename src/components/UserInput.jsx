import React from "react";

const UserInput = (props) => {
  return (
    <div className="relative w-full">
      {/* Floating Label */}
      <label
        htmlFor={props.id}
        className="absolute -top-2 left-3 bg-[#FFF] px-1 text-[13px] text-gray-700 font-poppins"
      >
        {props.lblName}
      </label>

      {/* Input Wrapper */}
      <div className="flex items-center border border-gray-400 rounded px-4 py-2  ">
        {/* Icon */}
        {props.icon && (
          <props.icon className="w-5 h-5 text-black mr-2 font-poppins" />
        )}
        {/* Input */}
        <input
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          className="bg-transparent outline-none flex-1 text-gray-700 font-poppins"
        />
      </div>
    </div>
  );
};

export default UserInput;
