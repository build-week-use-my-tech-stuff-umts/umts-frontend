import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { postEquipment } from "../../store/actions/equipmentActions";

function NewItmFrm({ values, errors, touched, isSubmitting }) {
  return (
    <div className="form-card">
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
            <Field
              type="number"
              name="price"
              placeholder="Weekly Rental Price"
            />
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
        <button className="ui button" type="submit">
          Submit
        </button>
        <button className="ui button" type="reset">
          Reset Form
        </button>
      </Form>
    </div>
  );
}

const NewItemForm = withFormik({
  mapPropsToValues({ name, catId, description, price, imageUrl, address }) {
    return {
      name: name || "",
      catId: catId || "5",
      description: description || "",
      price: price || "",
      imageUrl: imageUrl || "http://dummyimage.com/1042x1375.jpg/dddddd/000000",
      address: address || ""
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
    formikBag.props.postEquipment(values).then(() => {
      window.location.reload();
    });
  }
})(NewItmFrm);

export default connect(
  null,
  { postEquipment }
)(NewItemForm);
