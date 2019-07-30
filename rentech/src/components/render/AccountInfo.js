import React from "react";
import EditAccount from "./EditAccount.js";
import ChangePass from './ChangePass.js'
const AccountInfo = props => {
  return (
    <div className="account">
      {/* Plug in the user details in respective forms */}
     <div className='account-header'> <h2>Account Information</h2>
       <EditAccount />
        <ChangePass/>
    </div>
      <div>Name: User Name Props</div>
      <div>Address: User Address Props</div>
      <div>State: User U.S. State Props</div>
      <div>City: User City Props</div>
      <div>Zip: User Zip Code Props</div>
      <div>Phone: User Phone Number Props</div>
      <div>Password: *********</div>
    </div>
  );
};

export default AccountInfo;
