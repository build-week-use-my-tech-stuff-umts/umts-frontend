import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// import axios from "axios";

function NewPass({ values, errors, touched, isSubmitting }) {
  return (
    <div className="form-card">
      <Form className="ui form">
        <div className="field">
          <label htmlFor="oPassword">
            Old Password
            {touched.oPassword && errors.oPassword && <p>{errors.oPassword}</p>}
            <Field
              type="password"
              name="oPassword"
              placeholder="Old Password"
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="password">
            New Password
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
          </label>
        </div>
        <div className="field">
          <label htmlFor="cPassword">
            Confirm New Password
            {touched.cPassword && errors.cPassword && <p>{errors.cPassword}</p>}
            <Field
              type="password"
              name="cPassword"
              placeholder="Confirm Password"
            />
          </label>
        </div>

        {/* disabled={isSubmitting}  ***Removed from submit button for testing***/}
        <button className="ui button" type="submit">
          Change Password
        </button>
        <button className="ui button" type="reset">
          Reset Form
        </button>
      </Form>
    </div>
  );
}

const UpdatePassword = withFormik({
  mapPropsToValues({
    oPassword,
    password,
    cPassword,
    
  }) {
    return {
      oPassword: oPassword || "",
      password: password || "",
      cPassword: cPassword || "",
      };
  },
  validationSchema: Yup.object().shape({
    oPassword: Yup.string()
    .required("is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("is required"),
    cPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match!"
    ),
    zip: Yup.string()
      .min(5, "Zipcode must be 5 numbers")
      .max(5, "Zipcode cannot be longer than 5 numbers")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else if (values.tos === false) {
      setErrors({ tos: "Please Accept the Terms of Service" });
    } else {
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
      console.log(values);
    }
  }
})(NewPass);
export default UpdatePassword
