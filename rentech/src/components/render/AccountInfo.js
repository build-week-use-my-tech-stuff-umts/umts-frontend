import React, { useState }from "react";
import EditAccount from "./EditAccount.js";
import ChangePass from "./ChangePass.js";



const AccountInfo = (props) => {
  //set initial state for a user object here- useState?

  // console.log(props)
  const [user, setUser] = useState({ 
    
	  email: '',
    street: null,
    state: null,
    city: '',
    phone: '',
    password: ''
  });

//make axios call for user data here
//take res data and set it to state via setUser?
// console.log(user)

  return (
    <div className="account">
      
      <div className="account-header">
        {" "}
        <h2>Account Information</h2>
        <div className="flex-col">
          {/* pass props as user to children? */}
          <EditAccount user={user}/>
          <ChangePass user={user}/>
        </div>
      </div>

      {/* bring in user.data relevant to each field? */}
      <div>Email: "User Name" Props</div>
      <div>Street Address: User Address Props</div>
      <div>State: User U.S. State Props</div>
      <div>City: User City Props</div>
      {/* <div>Zip: User Zip Code Props(this is not stored in our BE may need to removed)</div> */}
      <div>Phone: User Phone Number Props</div>
      <div>Password: *********</div>

    </div>
  );
};

export default AccountInfo;
