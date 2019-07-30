import React from "react";
import logo from '../../images/logo.png'
import logo2 from '../../images/logo2.png'

import {Image, Header} from 'semantic-ui-react'
const ProfileHeader = props => {
  return (
    <>
    <div className="profile-header">
<Image src={logo} size='small'/>
     <Header className='profile-header-h1' >Welcome to your RenTech Profile Page (first name) {props.firstName}</Header>
<Image className='logo2' src={logo2} size='small'/>
        </div>
      {/* <div className="flex-col"> */}


        
      {/* </div> */}
</>
  );
};

export default ProfileHeader;
