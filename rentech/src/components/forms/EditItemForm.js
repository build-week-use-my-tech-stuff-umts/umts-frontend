import React from "react";
import { connect } from "react-redux";
import { editItem } from "../../store/actions/equipmentActions";

import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// import axios from "axios";

function EditItmFrm({ values, errors, touched, isSubmitting, rentItem }) {
  console.log("edit", rentItem);

  return (
    <Form className="ui form">
      <div className="field">
        <label htmlFor="name">
          Name
          {touched.name && errors.name && <p>{errors.name}</p>}
          <Field type="text" name="name" placeholder="Name of Item" />
        </label>
      </div>
      <div className="field">
        <label htmlFor="catId">
          {" "}
          Type of Item:
          <Field component="select" name="catId">
            <option value="1">Camera</option>
            <option value="2">TV</option>
            <option value="3">Audio</option>
            <option value="4">Computer</option>
            <option value="5">Other</option>
          </Field>
        </label>
      </div>
      <div className="field">
        <label htmlFor="description">
          Description
          {touched.description && errors.description && (
            <p>{errors.description}</p>
          )}
          <Field
            component="textarea"
            name="description"
            placeholder="Item Description"
          />
        </label>
      </div>
      <div className="field">
        <label htmlFor="price">
          Price
          {touched.price && errors.price && <p>{errors.price}</p>}
          <Field type="number" name="price" placeholder="Weekly Rental Price" />
        </label>
      </div>
      <div className="field">
        <label htmlFor="imageUrl">
          URL of Item Image
          {touched.imageUrl && errors.imageUrl && <p>{errors.imageUrl}</p>}
          <Field type="url" name="imageUrl" placeholder="Product Image URL" />
        </label>
      </div>
      <div className="field">
        <label htmlFor="address">
          Address
          {touched.address && errors.address && <p>{errors.address}</p>}
          <Field type="text" name="address" placeholder="Address" />
          {/*TODO::: Address value should populate with address in the persons profile */}
        </label>
      </div>

      {/* disabled={isSubmitting}  ***Removed from submit button for testing***/}
      <button className="ui close button" type="submit">
        Submit
      </button>
      <button className="ui button" type="reset">
        Reset Form
      </button>
    </Form>
  );
}

const EditItemForm = withFormik({
  mapPropsToValues({
    name,
    catId,
    description,
    price,
    imageUrl,
    address,
    rentItem
  }) {
    return {
      itemId: rentItem.id,
      name: name || rentItem.name,
      catId: catId || rentItem.catId,
      description: description || rentItem.description,
      price: price || rentItem.price,
      imageUrl: imageUrl || rentItem.category.imageUrl,
      address: address || rentItem.address
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    catId: Yup.string().required("Type is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.string().required("Price is required"),
    imageUrl: Yup.string()
      .url("Must be a valid URL")
      .required("Image URL is required")
  }),

  handleSubmit(values, formikBag) {
    formikBag.props
      .editItem(values)
      // console.log(formikBag);
      .then(() => {
        window.location.reload();
      });
  }
})(EditItmFrm);
export default connect(
  null,
  { editItem }
)(EditItemForm);
