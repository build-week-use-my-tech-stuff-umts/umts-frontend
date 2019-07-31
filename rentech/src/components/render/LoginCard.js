import React from "react";
import Header from "./Header.js";
import LoginForm from "../forms/LoginForm.js";
export default function LoginCard(props) {
  return (
    <div>
      <LoginForm props={props}/>
    </div>
  );
}
//Some test code
