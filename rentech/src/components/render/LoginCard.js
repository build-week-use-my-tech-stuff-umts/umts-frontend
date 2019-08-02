import React from "react";
// import Header from "./Header.js";
import LoginForm from "../forms/LoginForm.js";
import Logo from "../../img/logo-new.png";
import { Card } from "semantic-ui-react";

export default function LoginCard(props) {
  return (
    <Card className="login-card">
      <div className="center">
        <img src={Logo} alt="RenTech Logo" className="logo" />
      </div>
      <div className="form-container">
        <LoginForm props={props} />
      </div>
    </Card>
  );
}
//Some test code
