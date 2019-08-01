import React, { useEffect }from "react";
import EditAccount from "./EditAccount.js";
import ChangePass from "./ChangePass.js";
import { getUserProfile } from '../../store/actions/authActions'
import {connect} from 'react-redux'

// res.data.user ===user info

const AccountInfo = (props) => {
  useEffect(() => {
    props.getUserProfile()
  },[]);


console.log(props.user)

  return (
    props.user &&  
    (<div className="account">
      
      <div className="account-header">
        {" "}
        <h2>Account Information</h2>
        <div className="flex-col">
          
          <EditAccount />
          <ChangePass />
        </div>
      </div>

      
      <div>Email: {props.user.email}</div>
      <div>Street Address: {props.user.street}</div>
      <div>State: {props.user.state}</div>
      <div>City: {props.user.city}</div>
      <div>Phone:{props.user.phone}</div>
      

    </div>)
    
  );
};



const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  // console.log(state);
  })



export default connect(mapStateToProps, {getUserProfile})(AccountInfo);
