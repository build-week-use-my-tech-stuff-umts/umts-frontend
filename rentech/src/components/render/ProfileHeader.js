import React from "react";

const ProfileHeader = props => {
  return (
    <div className="profile-header">
      <div className="flex-row">
        <img
          src={require("../../img/rentech-logo.png")}
          alt="RenTech Logo"
          className="logo"
        />
        <div className="greeting-col">
          <h3>Log Out</h3>
          <h2>Welcome Back, John</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
