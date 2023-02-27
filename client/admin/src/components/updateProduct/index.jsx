import React from "react";
import { Formik, Form, Field } from "formik";
import UpdateProductSchema from "./schema";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { updateData } from "../../redux/slice/getProductsSlice";
import { useState } from "react";

const UpdateProductFormik = () => {
  const product = useSelector((state) => state.getDataReducer);
  const dispatch = useDispatch();
  const [editData, setEditData] = useState(false);

  const productEdit = async (id) => {
    setEditData(true);
    product.data?.map((e) => {
      if (e._id === id) {
        values.id = e._id;
        values.image1 = e._image1;
        values.image2 = e._image2;
        values.image3 = e._image3;
        values.image4 = e._image4;
        values.name = e._name;
        values.slugs = e._slugs;
        values.description = e._description;
        values.price = e._price;
        values.availability = e._availability;
        values.brand = e._brand;
      }
    });
  };

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
        validationSchema={UpdateProductSchema}
        onSubmit={(values) => {
          dispatch(updateData(values)).then(() => dispatch(getData()));
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="addInput">
              <Field name="image1" placeholder="image1" />
              {errors.image1 && touched.image1 ? (
                <div>{errors.image1}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="image2" placeholder="image2" />
              {errors.image2 && touched.image2 ? (
                <div>{errors.image2}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="image3" placeholder="image3" />
              {errors.image3 && touched.image3 ? (
                <div>{errors.image3}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="image4" placeholder="image4" />
              {errors.image4 && touched.image4 ? (
                <div>{errors.image4}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="name" placeholder="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div className="addInput">
              <Field name="slug" placeholder="slug" />
              {errors.slug && touched.slug ? <div>{errors.slug}</div> : null}
            </div>
            <div className="addInput">
              <Field name="description" placeholder="description" />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="price" placeholder="price" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
            </div>
            <div className="addInput">
              <Field name="availability" placeholder="availability" />
              {errors.availability && touched.availability ? (
                <div>{errors.availability}</div>
              ) : null}
            </div>
            <div className="addInput">
              <Field name="brand" placeholder="brand" />
              {errors.brand && touched.brand ? <div>{errors.brand}</div> : null}
            </div>

            <button type="submit" className="subBtn">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateProductFormik;
