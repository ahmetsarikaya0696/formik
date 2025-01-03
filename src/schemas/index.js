import * as yup from "yup";

const passwordRules =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  age: yup
    .number()
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .required("Age is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .matches(passwordRules, {
      message:
        "Password must contain at least 5 characters, one uppercase, one lowercase, one number and one special case character",
    })
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const portalSchema = yup.object().shape({
  userName: yup.string().required("UserName is required").min(3, "Too short"),
  school: yup
    .string()
    .required("School is required")
    .oneOf(["MIT", "Harvard", "Stanford", "Oxford"], "Invalid school"),
  isAccepted: yup.boolean().oneOf([true], "You must accept the terms"),
});
