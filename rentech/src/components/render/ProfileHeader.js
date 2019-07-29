import React from "react";

const ProfileHeader = props => {
  return (
    <div className="profile-header">
      <div className="flex-col">
        <span className="logo">LOGO</span>
        <span>Hi, User:John Doe</span>
      </div>
      <h1>RenTech</h1>
    </div>
  );
};

export default ProfileHeader;
