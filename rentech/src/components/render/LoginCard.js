import React from "react";
// import Header from "./Header.js";
import LoginForm from "../forms/LoginForm.js";
import Logo from "../../img/rentech-logo-new.png";
export default function LoginCard(props) {
  return (
    <div>
      <div className="center">
        <img src={Logo} alt="RenTech Logo" className="logo" />
      </div>
      <LoginForm props={props} />
    </div>
  );
}
//Some test code
