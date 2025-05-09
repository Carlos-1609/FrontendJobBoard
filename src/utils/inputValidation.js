import { Mail, EyeOff, Lock } from "lucide-react";

export const first_name_validation = {
  name: "First Name",
  label: "First Name",
  type: "text",
  id: "firstName",
  placeholder: "Write your first name ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const last_name_validation = {
  name: "Last Name",
  label: "Last Name",
  type: "text",
  id: "lastName",
  placeholder: "Write your last name ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const password_validation = {
  name: "password",
  label: "Password",
  type: "password",
  id: "userPassword",
  placeholder: "type password ...",
  Icon: EyeOff,
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 6,
      message: "min 6 characters",
    },
  },
};

export const email_validation = {
  name: "email",
  label: "Email",
  type: "email",
  id: "userEmail",
  placeholder: "email@gmail.com",
  Icon: Mail,
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "not valid",
    },
  },
};
