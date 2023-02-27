import React from "react";
import { Formik, Form, Field } from "formik";
import AddProductSchema from "./schema";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/slice/getProductsSlice";
import "./index.scss"
const AddProductFormik = () => {
    const dispatch = useDispatch();

  return (
    <div id="formAdd">
      <Formik
        initialValues={{
          image1: "",
          image2: "",
          image3: "",
          image4: "",
          name: "",
          slug: "",
          description: "",
          price: "",
          availability: "",
          brand: "",
        }}
        validationSchema={AddProductSchema}
        onSubmit={(values) => {
            dispatch(postData(values));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="addInput">
              <Field name="image1"  placeholder="image1"/>
              {errors.image1 && touched.image1 ? (
                <div>{errors.image1}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="image2" placeholder="image2"/>
              {errors.image2 && touched.image2 ? (
                <div>{errors.image2}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="image3"  placeholder="image3"/>
              {errors.image3 && touched.image3 ? (
                <div>{errors.image3}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="image4"  placeholder="image4"/>
              {errors.image4 && touched.image4 ? (
                <div>{errors.image4}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="name"  placeholder="name"/>
              {errors.name && touched.name ? (
                <div>{errors.name}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="slug"  placeholder="slug"/>
              {errors.slug && touched.slug ? (
                <div>{errors.slug}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="description"  placeholder="description"/>
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="price"  placeholder="price"/>
              {errors.price && touched.price ? (
                <div>{errors.price}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="availability"  placeholder="availability"/>
              {errors.availability && touched.availability ? (
                <div>{errors.availability}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="brand"  placeholder="brand"/>
              {errors.brand && touched.brand ? (
                <div>{errors.brand}</div>
              ) : null}
            </div>

            <button type="submit" className="subBtn">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProductFormik;
