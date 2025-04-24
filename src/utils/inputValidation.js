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
