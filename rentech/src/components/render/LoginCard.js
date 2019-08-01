import React from "react";
// import Header from "./Header.js";
import LoginForm from "../forms/LoginForm.js";
import Logo from "../../img/rentech-logo-new.png";
import { Card } from "semantic-ui-react";

export default function LoginCard(props) {
  return (
    <Card className="login-card">
      <div className="center">
        <img src={Logo} alt="RenTech Logo" className="logo" />
      </div>
      <LoginForm props={props} />
    </Card>
  );
}
//Some test code
