import * as Yup from "yup";

const UpdateProductSchema = Yup.object().shape({
  image1: Yup.string().required("Required").url("image must be url"),
  image2: Yup.string().required("Required").url("image must be url"),
  image3: Yup.string().required("Required").url("image must be url"),
  image4: Yup.string().required("Required").url("image must be url"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    description: Yup.string()
    .min(2, "Too Short!")
    .max(250, "Too Long!")
    .required("Required"),
    price: Yup.number()
    .min(2, "Too Short!")
    .required("Required"),
    availability: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
    brand: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

export default UpdateProductSchema;
