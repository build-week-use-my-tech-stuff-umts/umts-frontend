import React from "react";

const AccountInfo = props => {
  return (
    <div className="account">
      {/* Plug in the user details in respective forms */}
      <h2>Account Information</h2>
      <div>Name: John Doe</div>
      <div>Address: 123 Waywerd lane</div>
      <div>State: TX</div>
      <div>City: Austin</div>
      <div>Phone: (111)222-3333</div>
      <div>Password: ********</div>
      <div>BUTTON FOR EDIT PROFILE</div>
    </div>
  );
};

export default AccountInfo;
