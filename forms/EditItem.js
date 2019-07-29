import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// import axios from "axios";

function EditItmFrm({ values, errors, touched, isSubmitting }) {
  return (
    
    <Form>
    <label htmlFor='itemType'> Type of Item:
      <Field component="select" name="itemType">
          <option value="Camera">Camera</option>
          <option value="TV">TV</option>
          <option value="Audio">Audio</option>
          <option value="Computers">Computer</option>
          <option value="Others">Other</option>
        </Field>
    </label>
      <div>
        {touched.description && errors.description && <p>{errors.description}</p>}
        <Field component='textarea' name="description" placeholder="Item Description" />
      </div>
      <div>
        {touched.price && errors.price && <p>{errors.price}</p>}
        <Field type="number" name="price" placeholder="Weekly Rental Price" />
      </div>
      <div>
        {touched.imageUrl && errors.imageUrl && <p>{errors.imageUrl}</p>}
        <Field type="url" name="imageUrl" placeholder="Product Image URL" />
      </div>
      <div>
        {touched.address && errors.address && <p>{errors.address}</p>}
        <Field type="text" name="address" placeholder="Address" />
        {/*TODO::: Address value should populate with address in the persons profile */}
      </div>
      
      {/* disabled={isSubmitting}  ***Removed from submit button for testing***/}
      <button type='submit'>Submit</button>
      <button type='reset'>Reset Form</button>
    </Form>
  );
}

const EditItemForm = withFormik({
  mapPropsToValues({
    itemType,
    description,
    price,
    imageUrl,
    address
    
  }) {
    return {
      itemType: itemType || "Camera",
      description: description || "",
      price: price || "",
     imageUrl: imageUrl || "",
      address: address || ""
    };
  },
  validationSchema: Yup.object().shape({
    itemType: Yup.string().required("Type is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.string()
      .required("Price is required"),
    imageUrl: Yup.string()
    .url('Must be a valid URL')
     .required("Image URL is required"),
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
      //   axios
      //     .post("https://yourdatabaseurlgoeshere.com", values)
      //     .then(res => {
      //       console.log(res); // Data was created successfully and logs to console
      //       resetForm();
      //       setSubmitting(false);
      //     })
      //     .catch(err => {
      //       console.log(err); // There was an error creating the data and logs to console
      //       setSubmitting(false);
      //     });
      console.log(
        values
      );
    }
  }
)(EditItmFrm);
export default EditItemForm;
