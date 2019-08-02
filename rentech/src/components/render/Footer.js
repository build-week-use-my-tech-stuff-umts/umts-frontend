import React from "react";
// import Logo from "../../img/rentech-logo-new.png";
// import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react"

const Footer = () => {
    return (
        <div className="profile-footer">
            <Icon className='footer-nav' size='large' name='react' />
            <Icon className='footer-nav' size='large' name='sass' />
            <a className='footer-nav' href='https://rentech-ryan.netlify.com/'>Ryan Marketing Page</a>
            <a className='footer-nav' href='https://happy-noyce-8d40a9.netlify.com/'>Raajn Marketing Page</a>
            <a className='footer-nav' href='https://rentech-ryan.netlify.com/about.html'>About the Team</a>
            <Icon className='footer-nav' size='large' name='html5' />
            <Icon className='footer-nav' size='large' name='js square' />
            <p>©2019 RenTech --- Dj-Ad-Sky-Wes-Ned</p>
        </div>
    );
};

export default Footer;
