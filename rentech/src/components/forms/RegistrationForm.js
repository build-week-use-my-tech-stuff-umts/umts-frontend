import React from "react";
import {connect} from 'react-redux';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { doCreateAccount } from '../../store/actions/authActions'


function RegFrm({ values, errors, touched }) {
  return (
    <div className="form-card">
    <h1>Create an Account</h1>
      <Form className="ui form">
        <div className="field">
          <label htmlFor="firstName">
            First Name
            {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
            <Field type="text" name="firstName" placeholder="First Name" />
          </label>
        </div>
        <div className="field">
          <label htmlFor="lastName">
            Last Name
            {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
            <Field type="text" name="lastName" placeholder="Last Name" />
          </label>
        </div>
        <div className="field">
          <label htmlFor="email">
            Email
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email" />
          </label>
        </div>
        <div className="field">
          <label htmlFor="phone">
            {" "}
            Phone
            {touched.phone && errors.phone && <p>{errors.phone}</p>}
            <Field type="text" name="phone" placeholder="(555) 555-5555" />
          </label>
        </div>
        <div className="field">
          <label htmlFor="address">
            {" "}
            Address
            {touched.address && errors.address && <p>{errors.address}</p>}
            <Field type="text" name="address" placeholder="Address" />
          </label>
        </div>
        <div className="field">
          <label htmlFor="city">
            {" "}
            City
            {touched.city && errors.city && <p>{errors.city}</p>}
            <Field type="text" name="city" placeholder="City" />
          </label>
        </div>
        <div className="field">
          <label htmlFor="state">
            State
            <Field component="select" name="state">
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Field>
          </label>
        </div>
        <div className="field">
          <label htmlFor="zip">
            Zip
            {touched.zip && errors.zip && <p>{errors.zip}</p>}
            <Field type="text" name="zip" placeholder="Zip" />
          </label>
        </div>
        <div className="field">
          <label htmlFor="password">
            Password
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
          </label>
        </div>
        <div className="field">
          <label htmlFor="cPassword">
            Confirm Password
            {touched.cPassword && errors.cPassword && <p>{errors.cPassword}</p>}
            <Field
              type="password"
              name="cPassword"
              placeholder="Confirm Password"
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="tos">
            {touched.tos && errors.tos && <p>{errors.tos}</p>}
            <Field type="checkbox" name="tos" checked={values.tos} />
            Accept TOS
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



const RegistrationForm = withFormik({
  mapPropsToValues({
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zip,
    password,
    cPassword,
    tos
  }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      phone: phone || "",
      address: address || "",
      city: city || "",
      state: state || "Alaska",
      zip: zip || "",
      password: password || "",
      cPassword: cPassword || "",
      tos: tos || false
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("is required"),
    lastName: Yup.string().required("is required"),
    email: Yup.string()
      .email("is not valid")
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



  handleSubmit(values, formikBag) {
    if (values.email === "alreadytaken@atb.dev") {
      formikBag.setErrors({ email: "That email is already taken" });
    } else if (values.tos === false) {
      formikBag.setErrors({ tos: "Please Accept the Terms of Service" });
    } else {
      
      formikBag.props.doCreateAccount(values)
       .then(() => {formikBag.props.props.history.push("/login")});
      console.log(values);

    }
  }
})(RegFrm);




export default connect(null, {doCreateAccount})(RegistrationForm);
