import React from "react";
import { useFormik } from "formik";
import UpdateProductSchema from "./schema";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { getData, updateData } from "../../redux/slice/getProductsSlice";
import { useState } from "react";

const UpdateProductFormik = () => {
  const product = useSelector((state) => state.getDataReducer);
  const dispatch = useDispatch();
  const [editData, setEditData] = useState(false);

  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
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
      },
      validationSchema: UpdateProductSchema,
      onSubmit: (values) => {
        dispatch(updateData(values)).then(() => dispatch(getData()));
        resetForm();
      },
    });

  const productEdit = async (id) => {
    console.log(values);
    // setEditData(true);
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
      <div className="input">
        <input
          id="image1"
          name="image1"
          type="text"
          placeholder="Image1"
          onChange={handleChange}
          value={values.image1}
        />
        {errors.image1 && touched.image1 && (
          <p className="error">{errors.image1}</p>
        )}
      </div>

      <div className="input">
        <input
          id="image2"
          name="image2"
          type="text"
          placeholder="Image2"
          onChange={handleChange}
          value={values.image2}
        />
        {errors.image2 && touched.image2 && (
          <p className="error">{errors.image2}</p>
        )}
      </div>

      <div className="input">
        <input
          id="image3"
          name="image3"
          type="text"
          placeholder="Image3"
          onChange={handleChange}
          value={values.image3}
        />
        {errors.image3 && touched.image3 && (
          <p className="error">{errors.image3}</p>
        )}
      </div>

      <div className="input">
        <input
          id="image4"
          name="image4"
          type="text"
          placeholder="Image4"
          onChange={handleChange}
          value={values.image4}
        />
        {errors.image4 && touched.image4 && (
          <p className="error">{errors.image4}</p>
        )}
      </div>

      <div className="input">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="name"
          onChange={handleChange}
          value={values.name}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="input">
        <input
          id="slugs"
          name="slugs"
          type="text"
          placeholder="slugs"
          onChange={handleChange}
          value={values.slugs}
        />
        {errors.slugs && touched.slugs && (
          <p className="error">{errors.slugs}</p>
        )}
      </div>

      <div className="input">
        <input
          id="price"
          name="price"
          type="text"
          placeholder="price"
          onChange={handleChange}
          value={values.price}
        />
        {errors.price && touched.price && (
          <p className="error">{errors.price}</p>
        )}
      </div>

      <div className="input">
        <input
          id="description"
          name="description"
          type="text"
          placeholder="description"
          onChange={handleChange}
          value={values.description}
        />
        {errors.description && touched.description && (
          <p className="error">{errors.description}</p>
        )}
      </div>

      <div className="input">
        <input
          id="availability"
          name="availability"
          type="text"
          placeholder="availability"
          onChange={handleChange}
          value={values.availability}
        />
        {errors.availability && touched.availability && (
          <p className="error">{errors.availability}</p>
        )}
      </div>

      <div className="input">
        <input
          id="brand"
          name="brand"
          type="text"
          placeholder="brand"
          onChange={handleChange}
          value={values.brand}
        />
        {errors.brand && touched.brand && (
          <p className="error">{errors.brand}</p>
        )}
      </div>

      <button onClick={() => productEdit()}> Edit </button>
    </div>
  );
};

export default UpdateProductFormik;
