import React from "react";
import Logo from "../../img/rentech-logo.png";
import { Route, Switch, NavLink } from "react-router-dom";
const Header = props => {
  return (
    <div className="profile-header">
      <div className="flex-row">
        <img src={Logo} alt="RenTech Logo" className="logo" />
      </div>
      <NavLink to="Login">Login</NavLink>
      <NavLink to="CreateAccount">Create Account</NavLink>
    </div>
  );
};

export default Header;
