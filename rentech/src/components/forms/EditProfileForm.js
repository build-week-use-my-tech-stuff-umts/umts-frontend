import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// import axios from "axios";

function EditProFrm({ values, errors, touched, isSubmitting }) {
  return (
    <div className="form-card">
      <Form className="ui form">
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
        {/* disabled={isSubmitting}  ***Removed from submit button for testing***/}
        <button className="ui button" type="submit">
          Update Profile
        </button>
        <button className="ui button" type="reset">
          Reset Form
        </button>
      </Form>
    </div>
  );
}

const EditProfileForm = withFormik({
  mapPropsToValues({
    phone,
    address,
    city,
    state,
    zip
  
  }) {
    return {
      phone: phone || "",
      address: address || "",
      city: city || "",
      state: state || "Alaska",
      zip: zip || ""
    };
  },
  validationSchema: Yup.object().shape({
     zip: Yup.string()
      .min(5, "Zipcode must be 5 numbers")
      .max(5, "Zipcode cannot be longer than 5 numbers")
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
  }
)(EditProFrm);
export default EditProfileForm;
