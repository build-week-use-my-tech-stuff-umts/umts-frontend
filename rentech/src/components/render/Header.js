import React from "react";
import Logo from "../../img/rentech-logo-new.png";
import { Route, Switch, NavLink } from "react-router-dom";
const Header = props => {
  return (
    <div className="profile-header">
      <img src={Logo} alt="RenTech Logo" className="logo" />
      <div className="float-right">
        <div className="link-container">
          <NavLink className="link" to="/">
            Login
          </NavLink>
          <NavLink className="link" to="/">
            Logout
          </NavLink>
          <NavLink className="link" to="createaccount">
            Create Account
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
