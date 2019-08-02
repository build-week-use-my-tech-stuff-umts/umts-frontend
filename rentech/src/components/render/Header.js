import React from "react";
import Logo from "../../img/logo-new.png";
// import { NavLink } from "react-router-dom";
import LogOutPopOut from "./LogOutPopOut";

const Header = props => {
  return (
    <div className="profile-header">
      <img src={Logo} alt="RenTech Logo" className="logo" />
      <div className="float-right">
        <div className="link-container">
          <LogOutPopOut />
        </div>
      </div>
    </div>
  );
};

export default Header;
