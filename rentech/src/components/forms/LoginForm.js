import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// import axios from "axios";

function LogFrm({ values, errors, touched, isSubmitting }) {
  return (
    <div className="form-card">
      <Form className="ui form">
        <div className="field">
          <label htmlFor="email">
            Email
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email" />
          </label>
        </div>
        <div className="field">
          <label htmlFor="password">
            Password
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
          </label>
        </div>
        {/* disabled={isSubmitting}  ***Removed from submit button for testing***/}
        <button className="ui button" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
}

const LoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("is required"),
    password: Yup.string().required("is required")
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
    console.log(values);
  }
})(LogFrm);
export default LoginForm;
