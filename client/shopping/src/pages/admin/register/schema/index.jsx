import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(70, "Too Long!")
    .required("First Name is required."),
  lastName: Yup.string()
    .min(3, "Too Short!")
    .max(70, "Too Long!")
    .required("Last Name is required."),
  email: Yup.string()
    .email("Please, enter a valid email address.")
    .required("Email is required."),
  password: Yup.string()
    .min(10, "Too Short!")
    .max(30, "Too Long!")
    .required("Password is required."),
});

export default RegisterSchema;
