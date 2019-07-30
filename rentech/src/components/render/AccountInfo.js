import React from "react";
import EditAccount from "./EditAccount.js";
const AccountInfo = props => {
  return (
    <div className="account">
      {/* Plug in the user details in respective forms */}
     <div className='account-header'> <h2>Account Information</h2>
       <EditAccount />
    </div>
      <div>Name: John Doe</div>
      <div>Address: 123 Waywerd lane</div>
      <div>State: TX</div>
      <div>City: Austin</div>
      <div>Zip: 99999</div>
      <div>Phone: (111)222-3333</div>
      <div>Password: ********</div>
    </div>
  );
};

export default AccountInfo;
