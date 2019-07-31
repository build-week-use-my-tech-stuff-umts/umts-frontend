import React from "react";
import Logo from "../../img/rentech-logo-new.png";
import { NavLink } from "react-router-dom";
const Header = props => {
  return (
    <div className="profile-header">
        <img src={Logo} alt="RenTech Logo" className="logo" />
        <div className='float-right'>

        <div className='link-container'>

        <NavLink onClick= {()=> {localStorage.removeItem('token')}} className='login' to="/login">Logout</NavLink>
        <NavLink className='login' to="/login">Login</NavLink>
        <NavLink to="createaccount">Create Account</NavLink>
      </div>

      </div>
    </div>
  );
};

export default Header;
