import React from "react";
import { doSignIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";




function LogFrm({ errors, touched }) {
  return (
    <div className="form-card">
    <h1>Login</h1>
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

        <button className="ui button" type="submit">
          Login
        </button>
        <NavLink to="/createaccount"><button className="ui button">Create Account</button></NavLink>

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

  handleSubmit(values, formikBag) {
  console.log(formikBag);
  formikBag.props.doSignIn(values)
  .then(() => {formikBag.props.props.history.push("/mytech")});
  }

})(LogFrm);



export default connect(null, {doSignIn})(LoginForm);
